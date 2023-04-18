import { Component } from '@angular/core';
import {Company} from "../companyModel";
import {CompanyService} from "../company.service";
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  companies: Company[]=[];
  loading = false;

  constructor(private companySer: CompanyService) {}

  ngOnInit(): void {
    this.loading = true;
    this.companySer.getCompanies().subscribe((data) => {
      this.loading = false;
      this.companies = data;
    });
  }
}
