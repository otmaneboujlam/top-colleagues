import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInService {

  counterSub = new Subject<boolean>();

  constructor() { }

  publier(isLoggedIn: boolean){
    this.counterSub.next(isLoggedIn);
  }

  abonner() : Observable<boolean>{
    return this.counterSub.asObservable();
  }
}
