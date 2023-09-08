import { Component } from '@angular/core';
import { Colleague } from './models/colleague';
import { Vote } from './models/vote';
import { LikeHate } from './models/like-hate';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';
  
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

  historyVotes : Vote[] = [];

  traiter(colleagueVote : Vote) {
    this.historyVotes.unshift(colleagueVote);
  }
}
