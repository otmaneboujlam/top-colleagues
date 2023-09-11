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

  colleagues : Colleague[] = [];
  
  ngOnInit(){
    this.colleagueService.getColleaguesFromAPI()
      .subscribe({
        next: colleagues => colleagues.forEach(colleague => this.colleagues.push(colleague))
      })
  }

  updateListColleague(){
    this.colleagues = [];
    this.colleagueService.getColleaguesFromAPI()
      .subscribe({
        next: colleagues => colleagues.forEach(colleague => this.colleagues.push(colleague))
      })
  }

  @Output() change:EventEmitter<boolean> = new EventEmitter<boolean>();

  traiterColleagueVote(colleagueVote : boolean) {
    this.change.emit(colleagueVote);
  }

  p: number = 1;

}
