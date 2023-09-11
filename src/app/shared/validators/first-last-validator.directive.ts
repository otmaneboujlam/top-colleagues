import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[tcFirstLastValidator]'
})
export class FirstLastValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if(control.value.prenomCtrl === control.value.nomCtrl){
      return { firstLast : 'first name must be different from lastname' };
    }
    return null;
    
  }

}
