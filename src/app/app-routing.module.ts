import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from 'src/app/customers/components/customer-list/customer-list.component';
import { WelcomeComponent } from './home/components/welcome.component';
import { CustomerDetailComponent } from './customers/components/customer-detail/customer-detail.component';

const routes: Routes = [
  
  {
    path: 'customer/view/:id',
    component: CustomerDetailComponent
  },
  {
    path: 'customer-list',
    component: CustomerListComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: '',
    redirectTo: 'welcome', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'welcome', pathMatch: 'full'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
