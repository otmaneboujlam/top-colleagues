import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { LikeHate } from '../models/like-hate';

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
