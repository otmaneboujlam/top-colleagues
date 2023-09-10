import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { LikeHate } from '../models/like-hate';
import { ColleagueService } from './colleague.service';
import { Colleague } from '../models/colleague';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) {

    this.http.get<any[]>("https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes")
      .subscribe({
        next: (votes: any[]) => votes.forEach((vote: any) => {
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
      })

  }

  historyVotes : Vote[] = [];

  getHistoryVotes = () => {
    return this.historyVotes;
  }
}
