import { ColleagueService } from 'src/app/providers/colleague.service';
import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';

@Directive({
  selector: '[tcPseudoValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective, multi: true}]
})
export class PseudoValidatorDirective implements AsyncValidator {

  constructor(private colleagueService : ColleagueService) { }

  validate(control : AbstractControl): Observable<ValidationErrors | null> {
    const pseudo : string = control.value.pseudo;
    return this.colleagueService.getColleagueDetail(pseudo).pipe(
      map(()=>{
        return {pseudoExist : "Pseudo "+pseudo+" existe déjà"}
      }),
      catchError(()=>of(null))
    )
  }

}
