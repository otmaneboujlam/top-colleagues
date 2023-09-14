import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'tc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private authService : AuthService, private router : Router){}

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
    location.reload();
  }

}
