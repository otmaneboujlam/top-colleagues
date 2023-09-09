import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { LikeHate } from '../models/like-hate';
import { ColleagueService } from './colleague.service';
import { Colleague } from '../models/colleague';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private colleagueService : ColleagueService) { }

  colleagues : Colleague[] = this.colleagueService.getColleagues();

  historyVotes : Vote[] = [
     {
      colleague : this.colleagues[0],
      vote : LikeHate.HATE
     },
     {
      colleague : this.colleagues[1],
      vote : LikeHate.LIKE
     }
  ];

  getHistoryVotes = () => {
    return this.historyVotes;
  }
}
