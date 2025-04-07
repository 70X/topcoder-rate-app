import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { RatesPageComponent } from '@features/rates/containers/rates-page/rates-page.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: RatesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
