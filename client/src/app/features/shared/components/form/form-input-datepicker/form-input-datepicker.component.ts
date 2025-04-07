import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'wbr-form-input-datepicker',
  templateUrl: './form-input-datepicker.component.html',
  styleUrls: ['./form-input-datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputDatepickerComponent {
  @Input() label: string;
  @Input() control: FormControl;
}
