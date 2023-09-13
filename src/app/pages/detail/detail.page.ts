import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateColleague } from 'src/app/models/create-colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss']
})
export class DetailPage {

  colleague : CreateColleague = {
    pseudo : "",
    last : "" ,
    first : "" ,
    photo : "",
    score : 0
  };

  constructor(private activatedRoute: ActivatedRoute, private colleagueService: ColleagueService){

    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        let pseudo = paramMap.get("pseudo");
        if(pseudo) {
          this.colleagueService.getColleagueDetail(pseudo)
        .subscribe({
          next: colleague => this.colleague = colleague
        })
        }
      }
    )

  }

}
