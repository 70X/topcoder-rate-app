import { Component } from '@angular/core';

@Component({
  selector: 'wbr-root',
  template: `
            <wbr-snack-bar-notification></wbr-snack-bar-notification>
            <router-outlet></router-outlet>
`
})
export class AppComponent {
}
