import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LockPage } from './lock';

@NgModule({
  declarations: [
    LockPage,
  ],
  imports: [
    IonicPageModule.forChild(LockPage),
  ],
})
export class LockPageModule {}
