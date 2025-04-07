import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/jwt.interceptor';
import { SessionsService } from './services/sessions.service';

export function initApp(session: SessionsService) {
  return () => session.initApp().catch((error) => { console.error(`Error init app: $o`, error) });
}
@NgModule({
  declarations: [],
  imports: [],
  exports: [], providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [SessionsService],
      multi: true
    }
  ]
})
export class CoreModule { }
