import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './modules/material.module';
import { HeaderComponent } from './components/header/header.component';
import { LayoutContainerComponent } from './components/layout/layout-container/layout-container.component';
import { SnackBarNotificationComponent } from './components/snack-bar-notification/snack-bar-notification.component';
import { FormInputTextComponent } from './components/form/form-input-text/form-input-text.component';
import { FormInputDatepickerComponent } from './components/form/form-input-datepicker/form-input-datepicker.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LayoutDialogConfirmComponent } from './components/layout/layout-dialog-confirm/layout-dialog-confirm.component';
import { FormInputSelectComponent } from './components/form/form-input-select/form-input-select.component';
import { FormControlErrorsComponent } from './components/form/form-control-errors/form-control-errors.component';
import { FormInputFileComponent } from './components/form/form-input-file/form-input-file.component';


const compontents = [
  HeaderComponent,
  LayoutContainerComponent,
  SnackBarNotificationComponent,
  FormInputTextComponent,
  FormInputDatepickerComponent,
  LoadingSpinnerComponent,
  FormInputSelectComponent,
  LayoutDialogConfirmComponent,
  FormControlErrorsComponent,
  FormInputFileComponent,
];

const modules = [
  CommonModule,
  FlexLayoutModule,
  MaterialModule,
  ReactiveFormsModule,
  HttpClientModule,
];

@NgModule({
  declarations: [
    ...compontents,
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
    ...compontents,
  ],
  entryComponents: [
    LayoutDialogConfirmComponent,
  ]
})
export class SharedModule { }
