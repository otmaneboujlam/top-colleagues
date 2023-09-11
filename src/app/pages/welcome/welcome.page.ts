import { Component } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from 'src/app/models/vote';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage {

  voteToAdd! : boolean;

  add(colleagueVote : boolean) {
    this.voteToAdd = colleagueVote;
  }
}
