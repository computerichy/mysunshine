import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TotalOverduePage } from './total-overdue';

@NgModule({
  declarations: [
    TotalOverduePage,
  ],
  imports: [
    IonicPageModule.forChild(TotalOverduePage),
  ],
})
export class TotalOverduePageModule {}
