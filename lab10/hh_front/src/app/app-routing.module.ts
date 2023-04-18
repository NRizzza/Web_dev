import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyComponent} from "./company/company.component";
import {VacancyComponent} from "./vacancy/vacancy.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: CompanyComponent },
  { path: 'companies', component: CompanyComponent },
  { path: 'companies/:id/vacancies', component: VacancyComponent },
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
