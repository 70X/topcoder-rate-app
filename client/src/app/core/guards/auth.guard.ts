import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SessionsService } from '@core/services/sessions.service';
import { NotificationsService } from '@core/services/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private sessionService: SessionsService,
    private notificationsService: NotificationsService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.sessionService.checkAuth().pipe(
      catchError((error) => {
        this.notificationsService.responseError(error);
        return of(false);
      })
    );
  }
}
