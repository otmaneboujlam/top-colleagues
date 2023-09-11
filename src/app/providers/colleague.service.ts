import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor(private http: HttpClient) {}

  colleagues : Colleague[] = []

  getColleaguesFromAPI = () => {
    return this.http.get<Colleague[]>("https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues");
  }

}
