import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { LikeHate } from '../models/like-hate';
import { ColleagueService } from './colleague.service';
import { Colleague } from '../models/colleague';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VoteAPI } from '../models/vote-api';
import { VoteToAPI } from '../models/vote-to-api';
import { tap } from 'rxjs';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient, private counterService : CounterService) {}

  historyVotes : Vote[] = [];

  getHistoryVotesFromAPI = () => {
    return this.http.get<VoteAPI[]>("https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/votes");
  }

  sendVoteToAPI = (voteToAPI : VoteToAPI)=>{
    return this.http.post<VoteToAPI>("https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/votes", voteToAPI,{
      headers: new HttpHeaders({
      "Content-Type": "application/json"
      })
    }).pipe(tap(()=>{
      if(voteToAPI.like_hate === "LIKE")
        this.counterService.publier(LikeHate.LIKE)
      else
      this.counterService.publier(LikeHate.HATE)
    }));
  }
}
