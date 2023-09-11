import { Component } from '@angular/core';
import { CreateColleague } from 'src/app/models/create-colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {

  constructor(private colleagueService : ColleagueService){}

  createColleague : CreateColleague = {
    pseudo : "", 
    last : "" , 
    first : "" , 
    photo : "https://randomuser.me/api/portraits/men/81.jpg",
    score : 0
  };

  ajouter(){
    console.log(this.createColleague);
    this.colleagueService.createColleague(this.createColleague);
  }

}
