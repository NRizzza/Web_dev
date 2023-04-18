from django.http.response import JsonResponse
from rest_framework.response import Response
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from django.shortcuts import Http404
from rest_framework import status

# FUNCTION
@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer= CompanySerializer(companies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except company.DoesNotExist as e:
        return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        company.delete()
        return Response({'message': 'successfully deleted'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def company_vacancies(request, id):
    if request.method == 'GET':
        company_name = Company.objects.get(id=id)
        vacancies = Vacancy.objects.filter(company=company_name)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



# CLASS

class VacancyListApiView(APIView):

    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

class VacancyDetailApiView(APIView):

    def get_object(self, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist as e:
            raise Http404

    def get(self, request, id=None):
        vacancy = self.get_object(id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id=None):
        vacancy=self.get_object(id)
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id=None):
        vacancy=self.get_object(id)
        vacancy.delete()
        return Response({'message': 'successfully deleted'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def top_ten_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
