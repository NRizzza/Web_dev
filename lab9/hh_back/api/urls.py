from django.urls import path
from .views import *

urlpatterns = [
    path('vacanccies/', vacancy_list),
    path('vacanccies/<int:id>', vacancy_detail),
    path('companies/', company_list),
    path('companies/<int:id>', company_detail),
    path('companies/<int:id>/vacancies/', company_vacancies),
    path('vacancies/top_ten/', top10_vacancies)
]