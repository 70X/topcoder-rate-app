import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'wbr-layout-dialog-confirm',
  templateUrl: './layout-dialog-confirm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutDialogConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<LayoutDialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string, item: any }
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(item: any): void {
    this.dialogRef.close(item);
  }
}
