import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from 'src/app/customers/components/customer-list/customer-list.component';
import { WelcomeComponent } from './home/components/welcome.component';
import { CustomerDetailComponent } from './customers/components/customer-detail/customer-detail.component';
import { LoginComponent } from 'src/app/authentication/components/login/login.component';
import { AuthGuard } from 'src/app/authentication/services/auth.guard';

const routes: Routes = [

  {
    path: 'customer/view/:id',
    component: CustomerDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customer-list',
    component: CustomerListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'welcome', pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'welcome', pathMatch: 'full',
    canActivate: [AuthGuard]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
