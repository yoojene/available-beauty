import { AbstractControl } from '@angular/forms';
/**
 * Validates password and confirm password fields
 *
 * @export
 * @class PasswordValidation
 */
export class PasswordValidation {
  static MatchPassword(AC: AbstractControl) {
      let password = AC.get('password').value;
      let confirmPassword = AC.get('confpassword').value;
      if (password !== confirmPassword) {
        AC.get('confpassword').setErrors({ MatchPassword: true });
      } else {
        return null;
      }
  }
}
