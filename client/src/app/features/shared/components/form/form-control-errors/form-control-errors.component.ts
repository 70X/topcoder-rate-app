import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wbr-form-control-errors',
  templateUrl: './form-control-errors.component.html',
  styleUrls: ['./form-control-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlErrorsComponent implements OnInit, OnDestroy {
  @Input() control: FormControl;
  @Input() set touched(touched: boolean) {
    this.computeListOfErrors();
  }
  public errors: string[];
  private subscription: Subscription;
  private readonly messages = {
    required: () => 'Field is required',
    minlength: (param) => `Field must be at least ${param.requiredLength} chars long`
  };
  constructor(private cdr: ChangeDetectorRef) { }

  private computeListOfErrors() {
    if (!this.control.touched || !this.control.errors) {
      this.errors = [];
      this.cdr.detectChanges();
      return;
    }
    this.errors = [];
    Object.keys(this.control.errors).forEach(field => {
      if (this.messages[field]) {
        this.errors.push(this.messages[field](this.control.errors[field]));
      } else if (this.control.errors[field] && this.control.errors[field].message) { // for custom error
        this.errors.push(this.control.errors[field].message)
      }
    });
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.computeListOfErrors();
    this.subscription = this.control.statusChanges.subscribe((status) => this.computeListOfErrors());
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
