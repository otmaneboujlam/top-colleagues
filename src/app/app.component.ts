import { Component } from '@angular/core';
import { Colleague } from './models/colleague';
import { Vote } from './models/vote';
import { LikeHate } from './models/like-hate';
import { IsLoggedInService } from './providers/is-logged-in.service';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';
  isLogged : boolean = false;

  constructor(private isLoggedIn : IsLoggedInService){}

  ngOnInit(){
    this.isLoggedIn.abonner().subscribe({
      next: (value: boolean) => {this.isLogged = value}
    })
  }

}
