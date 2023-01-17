import { AbstractControl } from '@angular/forms';

export class MyValidators {

  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    console.log(value);
    if (value > 10000) {
      return { price_invalid: true };
    }
    return null;
  }

  static isValidPassword(control: AbstractControl) {
    const value = control.value;
    if (MyValidators.containsNumber(value)) return null;

    return { invalid_password: true };
  }

  isNumber(value: string): boolean {
    return !isNaN(parseInt(value, 10));
  }

  private static containsNumber(value?: string): boolean {
    return /\d/.test(value);
  }

  static matchPassword(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    if (password === confirmPassword) {
      return null;
    }
    return { match_password: true };
  }

}
