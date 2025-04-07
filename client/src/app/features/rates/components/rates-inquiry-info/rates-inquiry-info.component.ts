import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { SnackBarNotifiactionService } from '@core/services/snack-bar-notifiaction.service';
import { FormUtility } from '@core/models/form.model';
import { RateInquiryInfo } from '@features/rates/models/rates.model';

@Component({
  selector: 'wbr-rates-inquiry-info',
  templateUrl: './rates-inquiry-info.component.html',
  styleUrls: ['./rates-inquiry-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatesInquiryInfoComponent implements OnInit {

  @Output() inquiryInfo: EventEmitter<RateInquiryInfo> = new EventEmitter();

  public form: FormGroup;
  public dataFormControls: { [key: string]: FormControl };

  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackBarNotifiactionService) { }


  public saveInquiry() {
    const toast = FormUtility.checkErrors(this.form);
    if (toast) {
      this.snackbarService.setSnackbarMessage(toast);
      return;
    }

    const toSave = {
      groupIds: this.dataFormControls.groupIds.value,
      fromDate: this.dataFormControls.fromDate.value,
      toDate: this.dataFormControls.toDate.value,
    } as RateInquiryInfo;
    this.inquiryInfo.emit(toSave);
  }

  /**
   * Return an object with invalidPattern or/and notAllowedChars if errors some occurred:
   *  Error 1: if input is not a number or comma or semicolon
   *  Error 2: if the list of input is not a string of 8 numbers
   * @param c FormControl
   */
  private groupIdsValidationChars(c: FormControl): ValidationErrors {
    if (!c || !c.value) {
      return null;
    }
    const result: ValidationErrors = {};
    result.invalidPattern = this.buildValidationPattern(c.value, 'Please enter list in valid format', /^[0-9,;]+$/);

    for (const valuesComma of c.value.split(',').filter((v: string) => !!v)) {
      for (const value of valuesComma.split(';').filter((v: string) => !!v)) {
        const test = this.buildValidationPattern(value, 'Please enter group ID in valid format', /^[0-9]{8}$/);
        if (test) {
          result.notAllowedChars = test;
          break;
        }
      }
    }
    return !!result.invalidPattern || !!result.notAllowedChars ? result : null;
  }

  private buildValidationPattern(value: any, message: string, pattern: RegExp): ValidationErrors {
    return !pattern.test(value) ? { message, pattern: `${pattern}` } : null;
  }

  ngOnInit(): void {
    this.dataFormControls = {
      groupIds: new FormControl(null, [Validators.required, this.groupIdsValidationChars.bind(this)]),
      fromDate: new FormControl(null),
      toDate: new FormControl(null, [Validators.required]),
    };
    this.dataFormControls.fromDate.setValidators(
      [Validators.required, FormUtility.dateMustBeLessThan(this.dataFormControls.toDate)]
    );
    this.form = this.fb.group(this.dataFormControls);
  }

}
