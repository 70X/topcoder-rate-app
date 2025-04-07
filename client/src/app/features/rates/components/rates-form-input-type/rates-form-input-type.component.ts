import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InquiryFileType } from '@features/rates/models/rates.model';

@Component({
  selector: 'wbr-rates-form-input-type',
  templateUrl: './rates-form-input-type.component.html',
  styleUrls: ['./rates-form-input-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatesFormInputTypeComponent {
  @Input() control: FormControl;

  public InquiryFileType: typeof InquiryFileType = InquiryFileType;
}
