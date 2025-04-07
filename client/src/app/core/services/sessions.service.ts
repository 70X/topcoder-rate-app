import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, mapTo, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  private baseUrl = `${environment.apiUrl}`;
  private jwtToken: string;

  constructor(protected http: HttpClient) { }

  public initApp(): Promise<any> {
    return this.updateAccessToken().toPromise();
  }

  public updateAccessToken(): Observable<string> {
    return this.http.get<{ JWT: string }>('config.json').pipe(
      tap(record => this.jwtToken = record.JWT),
      map(record => record.JWT)
    );
  }

  public getAccessToken(): string {
    return this.jwtToken;
  }

  public checkAuth(): Observable<boolean> {
    return this.http.get(`${this.baseUrl}/authorize`)
      .pipe(
        mapTo(true),
        catchError(error => throwError(error))
      );
  }
}
