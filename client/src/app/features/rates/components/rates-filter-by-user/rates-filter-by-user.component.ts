import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wbr-rates-filter-by-user',
  template: '<wbr-form-input-select label="Filter by user" [items]="items" [control]="control"></wbr-form-input-select>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatesFilterByUserComponent implements OnInit, OnDestroy {
  @Input() set users(users: string[]) {
    this.items = (users || []).map(u => ({
      value: u,
      viewValue: u
    }));
  }
  @Output() filter: EventEmitter<string> = new EventEmitter();
  public items: { value: any, viewValue: string }[];
  public control: FormControl;

  private subscription: Subscription;
  constructor() { }

  ngOnInit(): void {
    this.control = new FormControl();
    this.subscription = this.control.valueChanges.subscribe(user => this.filter.emit(user))
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
