import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customers/services/customer.service';
import { ICustomer } from '../../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  pageTitle: string = 'Customer List';
  errorMessage = '';

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter = value;
    this.filteredCustomers = this.listFilter ? this.perfomFilter(this.listFilter) : this.customers;
  }

  
  filteredCustomers: ICustomer[] = [];
  customers: ICustomer[] = [];

  constructor(private customerService: CustomerService) {
    
  }

   getCustomers() {
    this.customerService.getCustomers().subscribe(
      data => { 
        this.customers = data["data"],
        this.filteredCustomers = this.customers},
      error => this.errorMessage = <any>error,
      () => console.log('customers loaded')
    );
   }

  perfomFilter(filterBy: string) : ICustomer[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.customers.filter((customer: ICustomer) =>
      customer.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
    this.getCustomers();
  }

 

 
}
