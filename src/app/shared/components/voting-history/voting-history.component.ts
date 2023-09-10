import { Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  constructor(private voteService : VoteService){}

  historyVotes : Vote[] = this.voteService.getHistoryVotes();

  @Input() voteToAdd! : Vote;

  remove(colleagueVote : Vote){
    const index = this.historyVotes.indexOf(colleagueVote);
    if(index > -1){
      this.historyVotes.splice(index,1);
    }
  }

  ngOnChanges(changes: SimpleChanges){
    if( this.voteToAdd && changes['voteToAdd']){
      this.add(this.voteToAdd);
    }
  }

  add(colleagueVote : Vote) {
    this.historyVotes.unshift(colleagueVote);
  }

}
