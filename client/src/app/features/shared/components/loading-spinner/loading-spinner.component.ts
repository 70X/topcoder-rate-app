import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wbr-loading-spinner',
  template: `
    <div class="loading-spinner" fxLayout="row" fxLayoutAlign="center center">
      <mat-spinner></mat-spinner>
    </div>
`,
  styles: ['.loading-spinner { height: 100%; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSpinnerComponent {
}
