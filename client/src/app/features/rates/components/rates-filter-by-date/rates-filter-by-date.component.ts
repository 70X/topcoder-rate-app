import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wbr-rates-filter-by-date',
  template: '<wbr-form-input-datepicker [control]="control" label="Filter by creation date"></wbr-form-input-datepicker>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatesFilterByDateComponent implements OnInit, OnDestroy {
  @Output() filter: EventEmitter<Date> = new EventEmitter();

  public control: FormControl;
  private subscription: Subscription;
  constructor() { }

  ngOnInit(): void {
    this.control = new FormControl();
    this.subscription = this.control.valueChanges.subscribe(date => this.filter.emit(date));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
