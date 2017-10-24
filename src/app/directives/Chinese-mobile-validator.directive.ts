import {Directive, Input} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms';


@Directive({
  selector: '[ChineseMobileValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ChineseMobileValidator,
      multi: true
    }
  ]
})
export class ChineseMobileValidator implements Validator {
  @Input() ChineseMobileValidator: string;

  constructor() {
  }

  validate(control: AbstractControl): { [error: string]: any } {
    let value = control.value;
    let flag = /^1(3|4|5|7|8)\d{9}$/.test(value);
    if (flag) {
      return {ChineseMobileValidator: true};
    } else {
      return {ChineseMobileValidator: false};
    }
  }

}
