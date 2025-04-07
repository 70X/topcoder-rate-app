import { SnackbarType, SnackbarNotification } from '@core/models/notification.model';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SnackBarNotifiactionService } from '@core/services/snack-bar-notifiaction.service';

@Component({
  selector: 'wbr-form-input-file',
  templateUrl: './form-input-file.component.html',
  styleUrls: ['./form-input-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputFileComponent {
  @Input() control: FormControl;
  @Input() formats: string[] = [];

  constructor(private snackbar: SnackBarNotifiactionService) { }

  onFileChange(event: any, element: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (this.formats.some(s => s === this.getExtensionFile(file.name)[0])) {
        this.control.setValue(file);
      } else {
        element.value = '';
        this.supportedError();
      }
    }
  }

  private supportedError() {
    const toast = {
      type: SnackbarType.WARNING,
      message: 'Unsupported file extension (only .csv)'
    } as SnackbarNotification;
    this.snackbar.setSnackbarMessage(toast);
  }

  private getExtensionFile(filename: string) {
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined;
  }

}
