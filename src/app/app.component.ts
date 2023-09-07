import { Component } from '@angular/core';
import { Colleague } from './models/colleague';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';
  colleague : Colleague = {
    pseudo : "Messi",
    score : 0,
    photo : "https://cdn.openphoto.net/volumes/sizes/mike/29619/2.jpg"
  }
}
