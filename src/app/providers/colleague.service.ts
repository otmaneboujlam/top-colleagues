import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CreateColleague } from '../models/create-colleague';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor(private http: HttpClient) {}

  colleagues : Colleague[] = []

  getColleaguesFromAPI = () => {
    return this.http.get<Colleague[]>("https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues");
  }

  getColleagueDetail = (pseudo : string) => {
    return this.http.get<any>("https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues/"+pseudo);
  }

  createColleague = (newColleague : CreateColleague)=> {
    return this.http.post<CreateColleague>("https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues", newColleague,{
      headers: new HttpHeaders({
      "Content-Type": "application/json"
      })
    })
    .subscribe({
      next: colleagues => console.log(colleagues),
      error: err => console.log(err)
    })
  }

}
