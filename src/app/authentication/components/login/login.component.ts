import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle: string = 'Login';
  errorMessage = '';
  loginUserData: any = {}

  constructor(private authService: AuthService, 
              private router: Router) { }

  ngOnInit() {

  }

  login() {
    //this.router.navigate(['/welcome']);
    this.authService.login(this.loginUserData).subscribe(
      data => {
      localStorage.setItem('token', data.bearerToken),
      console.log(data.bearerToken);
      this.router.navigate(['/welcome']);
    },
     error => this.errorMessage = <any>error,
    ) 
  }

}
