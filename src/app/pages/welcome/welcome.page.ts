import { Component } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage {

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

  remove(colleagueVote : Vote){
    const index = this.historyVotes.indexOf(colleagueVote);
    if(index > -1){
      this.historyVotes.splice(index,1);
    }
  }
}
