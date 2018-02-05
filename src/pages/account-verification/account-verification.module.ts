import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountVerificationPage } from './account-verification';

@NgModule({
  declarations: [
    AccountVerificationPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountVerificationPage),
  ],
})
export class AccountVerificationPageModule {}
