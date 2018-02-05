import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LatestPaymentsPage } from './latest-payments';

@NgModule({
  declarations: [
    LatestPaymentsPage,
  ],
  imports: [
    IonicPageModule.forChild(LatestPaymentsPage),
  ],
})
export class LatestPaymentsPageModule {}
