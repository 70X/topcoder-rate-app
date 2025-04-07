import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'wbr-form-input-select',
  templateUrl: './form-input-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputSelectComponent {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() set items(items: { value: any, viewValue: string }[]) {
    if (items && items.length > 0) {
      this.options = items;
      this.filteredOptions$ = this.controlSelect.valueChanges
        .pipe(
          startWith(''),
          map(value => this.filter(value))
        );
    }
  }
  public options: { value: any, viewValue: string }[];
  public filteredOptions$: Observable<{ value: any, viewValue: string }[]>;
  public controlSelect: FormControl = new FormControl();

  public updateValue() {
    this.control.setValue(this.controlSelect.value);
  }

  private filter(value: string): { value: any, viewValue: string }[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.viewValue.toLowerCase().includes(filterValue));
  }

}
