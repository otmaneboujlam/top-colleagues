import { Component } from '@angular/core';
import { AbstractControl, AsyncValidator, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-create-colleague-reactive-forms',
  templateUrl: './create-colleague-reactive-forms.component.html',
  styleUrls: ['./create-colleague-reactive-forms.component.scss']
})
export class CreateColleagueReactiveFormsComponent implements AsyncValidator{

  colleagueForm!: FormGroup;

  created : boolean = false;

  constructor(private router: Router, private colleagueService : ColleagueService , private fb: FormBuilder){
    this.colleagueForm = this.fb.group({
      pseudo: [
        '',
        {
          validators : [Validators.required],
          asyncValidators : [this.validate.bind(this)],
        }
      ],
      first: ['', [Validators.required, Validators.minLength(2)]],
      last: ['', [Validators.required, Validators.minLength(2)]],
      photo: ['', [Validators.required, this.urlPatternValidator]],
      score: 0
    },
    {
      validators: [this.firstLastValidator]
    })
  }

  validate(control : AbstractControl): Observable<ValidationErrors | null> {
    const pseudo : string = control.value;
    return this.colleagueService.getColleagueDetail(pseudo).pipe(
      map(()=>{
        return {pseudoExist : "Pseudo "+pseudo+" existe déjà"}
      }),
      catchError(()=>of(null))
    )
  }

  get pseudoErrors() {
    const pseudoCtrl = this.colleagueForm.get('pseudo');
    return pseudoCtrl?.errors
  }

  get pseudoErr() {
    const pseudoCtrl = this.colleagueForm.get('pseudo');
    return pseudoCtrl && pseudoCtrl.dirty && pseudoCtrl.invalid
  }

  get nomErr() {
    const nomCtrl = this.colleagueForm.get('last');
    return nomCtrl && nomCtrl.dirty && nomCtrl.invalid
  }

  get prenomErr() {
    const prenomCtrl = this.colleagueForm.get('first');
    return prenomCtrl && prenomCtrl.dirty && prenomCtrl.invalid
  }

  get photoErr() {
    const photoCtrl = this.colleagueForm.get('photo');
    return photoCtrl && photoCtrl.dirty && photoCtrl.invalid
  }

  get photoErrors() {
    const photoCtrl = this.colleagueForm.get('photo');
    return photoCtrl?.errors
  }

  get firstLastErr() {
    const formCtrl = this.colleagueForm;
    const prenomCtrl = this.colleagueForm.get('first');
    const nomCtrl = this.colleagueForm.get('last');
    return formCtrl && prenomCtrl?.dirty && nomCtrl?.dirty && formCtrl.invalid
  }

  get firstLastErrors() {
    const formCtrl = this.colleagueForm;
    return formCtrl.errors
  }

  urlPatternValidator(control: AbstractControl): ValidationErrors | null {
    const urlPhoto : string = control.value;
    if(urlPhoto && urlPhoto.match("^https?://\S*") == null){
      return {urlPhoto : "L'URL doit commencer par http:// ou https://"}
    }
    return null;
  }

  firstLastValidator(control: AbstractControl): ValidationErrors | null {
    if(control.value.last === control.value.first){
      return {firstLast : 'Le prénom doit être différent du nom'};
    }
    return null;
  }

  ajouter(){
    console.log(this.colleagueForm.value);
    this.colleagueService.createColleague(this.colleagueForm.value);
    this.showHideMsg();
    this.reset();
  }

  reset(){
    this.colleagueForm.reset();
  }

  showHideMsg(){
    this.created = true;
    setTimeout(()=> {
      this.created=false;
      this.router.navigateByUrl("/colleagues");
    },3000);
  }
}
