import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateColleague } from 'src/app/models/create-colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {

  constructor(private router: Router, private colleagueService : ColleagueService){}

  created : boolean = false;

  createColleague : CreateColleague = {
    pseudo : "",
    last : "" ,
    first : "" ,
    photo : "",
    score : 0
  };

  ajouter(){
    console.log(this.createColleague);
    this.colleagueService.createColleague(this.createColleague);
    this.showHideMsg();
  }

  reset(form : NgForm){
    form.resetForm();
  }

  showHideMsg(){
    this.created = true;
    setTimeout(()=> {
      this.created=false;
      this.router.navigateByUrl("/colleagues");
    },3000);
  }

}
