import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';
import { IsLoggedInService } from 'src/app/providers/is-logged-in.service';

@Component({
  selector: 'tc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private isLoggedIn : IsLoggedInService, private authService : AuthService, private router : Router){}

  first : string = "";
  last : string = "";

  @Input() isLogged : boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if(this.isLogged && changes['isLogged']){
      this.authService.currentUser()
        .subscribe({
        next: value => {
          this.first = value.first;
          this.last = value.last;
        }
      })
    }
  }

  logOut = () => {
    localStorage.removeItem("TOKEN");
    this.isLoggedIn.publier(false);
    this.first = "";
    this.last = "";
    this.router.navigateByUrl("/login");
  }

}
