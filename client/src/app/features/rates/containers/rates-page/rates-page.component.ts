import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/internal/operators/finalize';
import { flatMap } from 'rxjs/operators';
import { RateInquiryInfo, RateInquiryFile, RateFile } from '@features/rates/models/rates.model';
import { RatesService } from '@features/rates/services/rates.service';
import { NotificationsService } from '@core/services/notifications.service';

@Component({
  selector: 'wbr-rates-page',
  templateUrl: './rates-page.component.html',
  styleUrls: ['./rates-page.component.scss']
})
export class RatesPageComponent implements OnInit {

  public rates: RateFile[];
  public filterRates: RateFile[];
  public users: string[];
  public loading: boolean;
  private cacheFilterUserId: string;
  private cacheFilterDate: Date;

  constructor(
    private ratesService: RatesService,
    private notification: NotificationsService) { }

  inquiryInfo(rateInquiryInfo: RateInquiryInfo) {
    this.ratesService.performRateInquiryInfo(rateInquiryInfo).subscribe(
      () => this.notification.responseSuccess(),
      (error: any) => this.notification.responseError(error)
    );
  }

  inquiryUpload(rateInquiryFile: RateInquiryFile) {
    this.ratesService.performRateInquiryFile(rateInquiryFile).subscribe(
      () => this.notification.responseSuccess(),
      (error: any) => this.notification.responseError(error)
    );
  }

  inquiryDelete(rate: RateFile) {
    if (this.loading) { return; }
    this.loading = true;

    this.ratesService.deleteFileByName(rate.filename).pipe(
      flatMap(() => this.ratesService.getFiles()),
      finalize(() => this.loading = false)
    ).subscribe(
      (rates: RateFile[]) => {
        this.notification.responseSuccess();
        this.updateList(rates);
      },
      (error: any) => this.notification.responseError(error)
    );

  }

  filterByUserId(userId?: string, currentList: RateFile[] = this.rates) {
    this.cacheFilterUserId = userId;
    return !userId ? currentList : currentList.filter(r => r.userId === userId);
  }

  filterByDate(date?: Date, currentList: RateFile[] = this.rates): RateFile[] {
    this.cacheFilterDate = date;
    return !date ? currentList : currentList.filter(r => this.compareDate(r.createDate, date));
  }

  applyFilter({ byUserId = this.cacheFilterUserId, byDate = this.cacheFilterDate }) {
    const currentList = this.filterByUserId(byUserId, this.rates);
    this.filterRates = this.filterByDate(byDate, currentList);
  }

  getInquiryFile() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.ratesService.getFiles().pipe(
      finalize(() => this.loading = false)
    ).subscribe(
      (rates: RateFile[]) => this.updateList(rates),
      (error: any) => this.notification.responseError(error)
    );

  }

  private compareDate(d1: Date, d2: Date) {
    return `${d1.getFullYear()}/${d1.getMonth()}/${d1.getDate()}` === `${d2.getFullYear()}/${d2.getMonth()}/${d2.getDate()}`;
  }

  private getUniqueUserIds(rates: RateFile[]) {
    return rates.filter(
      (value, index, array) => array.findIndex(t => (t.userId === value.userId)
      ) === index).map(r => r.userId);
  }

  private updateList(rates: RateFile[]) {
    this.rates = rates || [];
    this.applyFilter({});
    this.users = this.getUniqueUserIds(this.rates);
  }

  ngOnInit(): void {
    this.getInquiryFile();
  }

}
