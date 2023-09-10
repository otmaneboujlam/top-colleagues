import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { LikeHate } from '../models/like-hate';
import { ColleagueService } from './colleague.service';
import { Colleague } from '../models/colleague';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor() { }

  historyVotes : Vote[] = [];

  getHistoryVotes = () => {
    return this.historyVotes;
  }
}
