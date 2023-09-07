import { Component , EventEmitter, Input, Output} from '@angular/core';
import { Colleague } from 'src/app/models/colleague';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

  @Input() colleague! : Colleague;

  traiter(val: number) {
    if(val===0)
      this.colleague.score = this.colleague.score + 100;
    else 
      this.colleague.score = this.colleague.score - 200;
  }
}
