import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../vacancyModel";
import {ActivatedRoute} from "@angular/router";
import {VacancyService} from "../vacancy.service";
@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit{
  vacancies: Vacancy[] | undefined;
  company_id!: number;
  loading = false;

  constructor(private route: ActivatedRoute,
              private vacancySer: VacancyService) {}

  ngOnInit(): void {
    this.loading = true;
    this.company_id = this.route.snapshot.params['id'];
    this.vacancySer.getCompanyVacancies(this.company_id).subscribe((data) => {
      this.loading = false;
      this.vacancies = data;
    });
  }
}
