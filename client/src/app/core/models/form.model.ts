import { FormGroup, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { SnackbarType, SnackbarNotification } from './notification.model';

export class FormUtility {

  public static checkErrors(form: FormGroup): SnackbarNotification {

    Object.keys(form.controls).forEach(key => {
      form.controls[key].updateValueAndValidity();
    });
    form.markAllAsTouched();

    if (!form.valid) {
      const toast = {
        type: SnackbarType.WARNING,
        message: 'There was an error in your form, please try again.'
      } as SnackbarNotification;
      return toast;
    }
    return null;
  }

  public static dateMustBeLessThan(c2: FormControl): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
      if (!c.value || !c2.value || (c2.value.getTime() >= c.value.getTime())) { return null; }
      const result: ValidationErrors = {};
      function pad(s) { return (s < 10) ? '0' + s : s; }
      const dateString = [pad(c2.value.getMonth() + 1), pad(c2.value.getDate()), c2.value.getFullYear()].join('/');
      result.dateMustBeLessThan = { message: `This date must be less or equal than ${dateString}` };
      return result;
    };
  }
}
