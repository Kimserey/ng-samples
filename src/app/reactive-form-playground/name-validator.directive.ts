import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function notACarrotValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const name = control.value;
    return name === 'carrot' ? {'forbidCarrot': {name}} : null;
  };
}

@Directive({
  selector: '[forbidCarrot]',
  providers: [{provide: NG_VALIDATORS, useExisting: NotACarrotValidatorDirective, multi: true}]
})
export class NotACarrotValidatorDirective implements Validator, OnChanges {
  private valFn = Validators.nullValidator;

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['forbidCarrot'];
    if (change) {
      this.valFn = notACarrotValidator();
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }
}

