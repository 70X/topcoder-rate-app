import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  MatInputModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatPaginatorModule,
  MatSortModule,
  MatSelectModule,
  MatAutocompleteModule
} from '@angular/material';

const materialModules = [
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatSelectModule,
  MatAutocompleteModule,
];

@NgModule({
  declarations: [
  ],
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules,
  ],
  providers: []
})


export class MaterialModule { }
