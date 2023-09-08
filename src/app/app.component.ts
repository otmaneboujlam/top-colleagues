import { Component } from '@angular/core';
import { Colleague } from './models/colleague';
import { Vote } from './models/vote';
import { LikeHate } from './models/like-hate';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';
}
