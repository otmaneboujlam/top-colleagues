import { Component , EventEmitter, Input, Output} from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { ScorePipe } from '../../pipes/score.pipe';
import { Vote } from 'src/app/models/vote';
import { LikeHate } from 'src/app/models/like-hate';
import { CounterService } from 'src/app/providers/counter.service';
import { VoteService } from 'src/app/providers/vote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

  constructor(private router: Router, private voteService : VoteService){}

  @Input() colleague! : Colleague;

  traiterVote(val: LikeHate) {
    let tempLikeHate : string;
    if(val===LikeHate.LIKE)
      tempLikeHate = "LIKE";
    else
      tempLikeHate = "HATE";
    this.voteService.sendVoteToAPI({pseudo : this.colleague.pseudo, like_hate : tempLikeHate})
      .subscribe({
        next: (value : any) => this.colleague.score = value.score
    })
  }

  detail(){
    this.router.navigateByUrl("/colleagues/"+this.colleague.pseudo)
  }
}
