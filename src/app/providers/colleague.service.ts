import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor() { }

  colleagues : Colleague[] = [{
    pseudo : "Messi",
    score : -200,
    photo : new URL("https://cdn.openphoto.net/volumes/sizes/mike/29619/2.jpg")
  },
  {
    pseudo : "Ronaldo",
    score : 300,
    photo : new URL("https://images.rtl.fr/~c/1200v800/rtl/www/1209965-un-mouton-illustration.jpg")
  }]

  getColleagues = () => {
    return this.colleagues;
  }

}
