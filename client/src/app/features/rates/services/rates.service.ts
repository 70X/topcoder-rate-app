import { environment } from 'environments/environment';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import {
  RateDeserialize,
  RateInquiryInfo,
  RateSerialize,
  RateInquiryFile,
  RateFile
} from '@features/rates/models/rates.model';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  private baseUrl = `${environment.apiUrl}`;

  constructor(protected http: HttpClient) { }

  public getFiles(): Observable<RateFile[]> {
    return this.http.get<any[]>(`${this.baseUrl}/files`).pipe(
      map(record => record.map(RateDeserialize.rateFile)),
      catchError(error => throwError(error))
    );
  }

  public getFileByName(filename: string): Observable<RateFile> {
    return this.http.get<any>(`${this.baseUrl}/file/${filename}`).pipe(
      map(record => RateDeserialize.rateFile(record)),
      catchError(error => throwError(error))
    );
  }

  public deleteFileByName(filename: string): Observable<RateFile> {
    return this.http.delete(`${this.baseUrl}/file/${filename}`, {}).pipe(
      map(record => RateDeserialize.rateFile(record)),
      catchError(error => throwError(error))
    );
  }

  public performRateInquiryInfo(rateInquiry: RateInquiryInfo): Observable<RateFile> {
    return this.http.post(`${this.baseUrl}/rate-inquiry`, RateSerialize.rateInquiryInfo(rateInquiry)).pipe(
      map(record => RateDeserialize.rateFile(record)),
      catchError(error => throwError(error))
    );
  }

  public performRateInquiryFile(rateInquiry: RateInquiryFile): Observable<RateFile> {
    const fd = new FormData();
    fd.append('file', rateInquiry.file);
    fd.append('filename', rateInquiry.file.name);
    return this.http.post(`${this.baseUrl}/${rateInquiry.type}/${fd}/rate-inquiry`,
      RateSerialize.rateInquiryFile(rateInquiry)).pipe(
        map(record => RateDeserialize.rateFile(record)),
        catchError(error => throwError(error))
      );
  }
}
