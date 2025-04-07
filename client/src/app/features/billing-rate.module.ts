import { NgModule } from '@angular/core';

import { SharedModule } from '@features/shared/shared.module';
import { RatesPageComponent } from '@features/rates/containers/rates-page/rates-page.component';
import { RatesTableComponent } from '@features/rates/components/rates-table/rates-table.component';
import { RatesInquiryInfoComponent } from '@features/rates/components/rates-inquiry-info/rates-inquiry-info.component';
import { RatesInquiryUploadComponent } from '@features/rates/components/rates-inquiry-upload/rates-inquiry-upload.component';
import { RatesFilterByUserComponent } from '@features/rates/components/rates-filter-by-user/rates-filter-by-user.component';
import { RatesFilterByDateComponent } from '@features/rates/components/rates-filter-by-date/rates-filter-by-date.component';
import { SnackBarNotificationComponent } from '@features/shared/components/snack-bar-notification/snack-bar-notification.component';
import { RatesFormInputTypeComponent } from '@features/rates/components/rates-form-input-type/rates-form-input-type.component';

@NgModule({
  declarations: [
    RatesTableComponent,
    RatesInquiryInfoComponent,
    RatesInquiryUploadComponent,
    RatesPageComponent,
    RatesFilterByUserComponent,
    RatesFilterByDateComponent,
    RatesFormInputTypeComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    SnackBarNotificationComponent
  ]
})
export class BillingRateModule { }
