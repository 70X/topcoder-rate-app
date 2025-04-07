import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormUtility } from '@core/models/form.model';
import { SnackBarNotifiactionService } from '@core/services/snack-bar-notifiaction.service';
import { RateInquiryFile, InquiryFileType } from '@features/rates/models/rates.model';

@Component({
  selector: 'wbr-rates-inquiry-upload',
  templateUrl: './rates-inquiry-upload.component.html',
  styleUrls: ['./rates-inquiry-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatesInquiryUploadComponent implements OnInit {
  @Output() inquiryUpload: EventEmitter<RateInquiryFile> = new EventEmitter();
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
      file: this.dataFormControls.file.value,
      type: this.dataFormControls.type.value,
      fromDate: this.dataFormControls.fromDate.value,
      toDate: this.dataFormControls.toDate.value,
    } as RateInquiryFile;
    this.inquiryUpload.emit(toSave);
  }

  ngOnInit(): void {
    this.dataFormControls = {
      type: new FormControl(InquiryFileType.GROUP, [Validators.required]),
      file: new FormControl(null, [Validators.required]),
      fromDate: new FormControl(null, [Validators.required]),
      toDate: new FormControl(null, [Validators.required]),
    };
    this.dataFormControls.fromDate.setValidators(
      [Validators.required, FormUtility.dateMustBeLessThan(this.dataFormControls.toDate)]
    );
    this.form = this.fb.group(this.dataFormControls);
  }

}
