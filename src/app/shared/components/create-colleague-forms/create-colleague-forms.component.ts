import { Component } from '@angular/core';
import { CreateColleague } from 'src/app/models/create-colleague';

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {

  createColleague : CreateColleague = {
    pseudo : "", 
    nom : "" , 
    prenom : "" , 
    photo : ""
  };

  ajouter(){
    console.log(this.createColleague)
  }

}
