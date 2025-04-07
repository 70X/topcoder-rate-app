import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { LayoutDialogConfirmComponent } from '@features/shared/components/layout/layout-dialog-confirm/layout-dialog-confirm.component';
import { RateFile } from '@features/rates/models/rates.model';

@Component({
  selector: 'wbr-rates-table',
  templateUrl: './rates-table.component.html',
  styleUrls: ['./rates-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatesTableComponent implements OnDestroy {
  @Output() inquiryDelete: EventEmitter<RateFile> = new EventEmitter();
  @Input() set rates(rates: RateFile[]) {
    this.buildDataSet(rates || []);
  }
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  public dataSource: any;
  public tableCols: string[] = ['filename', 'dateSubmitted', 'submittedBy', 'status', 'delete'];
  private subscription: Subscription;

  constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  public deleteItem(item: RateFile): void {
    const dialogRef = this.dialog.open(LayoutDialogConfirmComponent, {
      width: '400px',
      data: { message: `Are you sure about deleting '${item.filename}'?`, item }
    });

    this.subscription = dialogRef.afterClosed().pipe(filter(r => !!r)).subscribe(rate =>
      this.inquiryDelete.emit(rate)
    );
  }

  public buildDataSet(rates: RateFile[]) {
    this.dataSource = new MatTableDataSource<any>(rates.map((rate: RateFile) => ({
      filename: rate.filename,
      fileurl: rate.fileurl,
      dateSubmitted: rate.createDate,
      submittedBy: rate.userId,
      status: rate.status
    })));
    this.cdr.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    setTimeout(() => this.dataSource.sort = this.sort, 0);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
