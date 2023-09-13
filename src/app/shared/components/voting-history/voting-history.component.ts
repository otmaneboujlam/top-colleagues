import { Component, EventEmitter, Input, OnDestroy, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { VoteAPI } from 'src/app/models/vote-api';
import { CounterService } from 'src/app/providers/counter.service';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  constructor(private voteService : VoteService, private counterService : CounterService){}

  subscription!: Subscription

  historyVotes : Vote[] =[];

  p : number = 1;

  ngOnInit(){
    this.counterService.abonner().subscribe({
      next: (l: LikeHate) => {
        this.historyVotes = [];
        this.voteService.getHistoryVotesFromAPI()
          .subscribe({
            next: (votes: VoteAPI[]) => votes.forEach((vote: VoteAPI) => {
            let tempLikeHate : LikeHate;
            if(vote.like_hate === "LIKE"){
              tempLikeHate = LikeHate.LIKE;
            }
            else{
              tempLikeHate = LikeHate.HATE;
            }
            let tempVote : Vote = {colleague : {pseudo : vote.colleague.pseudo , score : vote.score , photo : vote.colleague.photo}, vote : tempLikeHate};
            this.historyVotes.push(tempVote);
            })
          });
      }
    })
    this.voteService.getHistoryVotesFromAPI()
    .subscribe({
      next: (votes: VoteAPI[]) => votes.forEach((vote: VoteAPI) => {
        let tempLikeHate : LikeHate;
        if(vote.like_hate === "LIKE"){
          tempLikeHate = LikeHate.LIKE;
        }
        else{
          tempLikeHate = LikeHate.HATE;
        }
        let tempVote : Vote = {colleague : {pseudo : vote.colleague.pseudo , score : vote.score , photo : vote.colleague.photo}, vote : tempLikeHate};
        this.historyVotes.push(tempVote);
    })
  });
  }

  remove(colleagueVote : Vote){
    const index = this.historyVotes.indexOf(colleagueVote);
    if(index > -1){
      this.historyVotes.splice(index,1);
    }
  }

  //ngOnDestroy(){
  //  this.subscription.unsubscribe()
  //}
}
