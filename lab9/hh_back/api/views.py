from django.shortcuts import render
from django.http.response import JsonResponse
from .models import Company, Vacancy

# Create your views here.
def company_list(request):
    companies = Company.objects.all()
    companies_json=[Company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)

def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(company.to_json())

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [Vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(Vacancy.to_json())

def company_vacancies(request, id):
    company = Company.objects.get(id=id)
    vacancies = Vacancy.objects.filter(company=company)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def top10_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)
