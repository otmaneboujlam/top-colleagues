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
    photo : new URL("https://cdn.openphoto.net/volumes/sizes/mike/29619/2.jpg")
  }

  colleagues : Colleague[] = [
    {
      pseudo : "Messi",
      score : 0,
      photo : new URL("https://cdn.openphoto.net/volumes/sizes/mike/29619/2.jpg")
    },
    {
      pseudo : "Ronaldo",
      score : 0,
      photo : new URL("https://images.rtl.fr/~c/1200v800/rtl/www/1209965-un-mouton-illustration.jpg")
    }
  ]
}
