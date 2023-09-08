import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  @Input() historyVotes! : Vote[];

  @Output() change:EventEmitter<Vote> = new EventEmitter<Vote>();
  
  remove(colleagueVote : Vote) {
    this.change.emit(colleagueVote);
  }

}
