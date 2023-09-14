import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'tc-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {

  constructor(private router: Router, private authService : AuthService){}

  isError : boolean = false;

  login : Login = {
    pseudo : "",
    password : "",
  }


  submit = () => {
    this.authService.connection(this.login)
      .subscribe({
        next: value => {
          localStorage.setItem("TOKEN", value.jwt);
          this.router.navigateByUrl("/colleagues");
        },
        error: err => {
          console.log(err);
          this.showHideMsg();
        }
      })
  }

  showHideMsg(){
    this.isError = true;
    setTimeout(()=> {
      this.isError=false;
    },2000);
  }

}
