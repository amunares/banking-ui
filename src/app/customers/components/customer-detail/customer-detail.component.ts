import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CustomerService } from '../../services/customer.service';
import { ICustomer } from '../../customer';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  pageTitle = 'Customer Detail';
  errorMessage = '';
  customer: ICustomer | undefined;

  constructor(private customerService: CustomerService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getCustomer(id);
    }
  }

  getCustomer(id: number) {
    this.customerService.getCustomer(id).subscribe(
      data => this.customer = data,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/customer-list']);
  }


}
