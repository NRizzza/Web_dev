import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Vacancy} from "./vacancyModel";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private URL = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  getVacancy(vacancy_id:number): Observable<Vacancy>{
    return this.http.get<Vacancy>(`${this.URL}/vacancies/${vacancy_id}/`);
  }

  getVacancies(): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.URL}/vacancies/`);
  }

  getCompanyVacancies(company_id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(
      `${this.URL}/companies/${company_id}/vacancies/`
    );
  }

  getTop10Vacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.URL}/vacancies/top_ten/`);
  }
}
