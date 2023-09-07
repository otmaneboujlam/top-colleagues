import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {

  @Input() score! : number;

  @Output() change:EventEmitter<number> = new EventEmitter<number>();
  
  like() {
    this.change.emit(LikeHate.LIKE);
  }

  hate() {
    this.change.emit(LikeHate.HATE);
  }
}
