from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies/', company_vacancies),
    path('vacancies/', VacancyListApiView.as_view()),
    path('vacancies/<int:id>/', VacancyDetailApiView.as_view()),
    path('vacancies/top_ten/', top_ten_vacancies)
]