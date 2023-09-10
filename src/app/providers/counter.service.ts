import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LikeHate } from '../models/like-hate';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counterSub = new Subject<LikeHate>();

  constructor() { }

  publier(likeHate: LikeHate){
    this.counterSub.next(likeHate);
  }

  abonner() : Observable<LikeHate>{
    return this.counterSub.asObservable();
  }
}
