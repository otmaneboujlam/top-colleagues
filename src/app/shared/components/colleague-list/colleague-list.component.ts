import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {

  @Input() colleagues! : Colleague[];

  @Output() change:EventEmitter<Vote> = new EventEmitter<Vote>();

  traiter(colleagueVote : Vote) {
    this.change.emit(colleagueVote);
  }
}
