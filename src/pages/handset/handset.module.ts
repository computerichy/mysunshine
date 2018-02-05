import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HandsetPage } from './handset';

@NgModule({
  declarations: [
    HandsetPage,
  ],
  imports: [
    IonicPageModule.forChild(HandsetPage),
  ],
})
export class HandsetPageModule {}
