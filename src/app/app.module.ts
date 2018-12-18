import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customers/components/customer-list/customer-list.component';
import { CustomerService } from './customers/services/customer.service'
import { CustomerDetailComponent } from './customers/components/customer-detail/customer-detail.component';
import { WelcomeComponent } from './home/components/welcome.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { AuthService } from './authentication/services/auth.service';
import { AuthGuard } from './authentication/services/auth.guard';
import { TokenInterceptorService } from './authentication/services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, CustomerService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
