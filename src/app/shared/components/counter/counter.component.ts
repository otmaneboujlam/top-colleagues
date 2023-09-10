import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LikeHate } from 'src/app/models/like-hate';
import { CounterService } from 'src/app/providers/counter.service';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {
  
  like : LikeHate[] = [];
  hate : LikeHate[] = [];

  subscription!: Subscription

  constructor(private counterService : CounterService){}

  ngOnInit(){
    this.counterService.abonner().subscribe({
      next: (l: LikeHate) => {
      if(l===LikeHate.LIKE){
        this.like.push(l)
      }
      else {
        this.hate.push(l)
      }  
      }
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
