import { Component , EventEmitter, Input, Output} from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { ScorePipe } from '../../pipes/score.pipe';
import { Vote } from 'src/app/models/vote';
import { LikeHate } from 'src/app/models/like-hate';
import { CounterService } from 'src/app/providers/counter.service';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

  constructor(private counterService : CounterService){}

  @Input() colleague! : Colleague;

  @Output() change:EventEmitter<Vote> = new EventEmitter<Vote>();

  traiterVote(val: LikeHate) {
    this.counterService.publier(val);
    let colleagueVote : Vote  = {colleague : this.colleague,vote : val};
    this.change.emit(colleagueVote);
    if(val===LikeHate.LIKE)
      this.colleague.score = this.colleague.score + 100;
    else 
      this.colleague.score = this.colleague.score - 200;
  }
}