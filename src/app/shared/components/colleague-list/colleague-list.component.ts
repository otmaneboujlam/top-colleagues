import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from 'src/app/models/vote';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {

  constructor(private colleagueService : ColleagueService){}

  colleagues : Colleague[] = this.colleagueService.getColleagues();

  @Output() change:EventEmitter<Vote> = new EventEmitter<Vote>();

  traiterColleagueVote(colleagueVote : Vote) {
    this.change.emit(colleagueVote);
  }

  p: number = 1;

}
