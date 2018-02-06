import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { CountryCode, isValidNumber, parse } from 'libphonenumber-js';

export class PhoneNumberValidator {
  static isPhoneNumber(control: AbstractControl) {
    const regexp = /^(?:\W*\d){11}\W*$/; // 11 digits no spaces
    const valid = regexp.test(control.value);
    console.log(valid);
    return valid ? null : { invalidPhone: true };
  }
}

// export const isPhoneNumber = (country: string): ValidatorFn => {
//   return (control: AbstractControl): { [key: string]: boolean } => {
//     console.log(control);
//     console.log(country);
//     if (Validators.required(control)) return null;

//     let v: string = control.value;
//     let parsedVal: any = parse(v, country as CountryCode);
//     console.log(v);
//     console.log(parsedVal);
//     return isValidNumber(parsedVal) ? null : { phone: true };
//   };
// };
