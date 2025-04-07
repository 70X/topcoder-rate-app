import { SessionsService } from './sessions.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationsService } from './notifications.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private sessionService: SessionsService,
    private notificationService: NotificationsService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.sessionService.getAccessToken();
    const req = request.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } });
    return next.handle(req).pipe(

      catchError(error => {
        this.notificationService.responseError(error);
        return throwError(error);
      })
    );
  }
}
