import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { DeliveryPage } from '../delivery/delivery';
import { UsagePage } from '../usage/usage';
import { OrderPage } from '../order/order';
import { HandsetPage } from '../handset/handset';
import { PaymentsPage } from '../payments/payments';
import { ContractsPage } from '../contracts/contracts';
import { AccountVerificationPage } from '../account-verification/account-verification';
import { FaqPage } from '../faq/faq';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public goToProfile() {
    this.navCtrl.push(ProfilePage);
  }

  public goToDelivery() {
    this.navCtrl.push(DeliveryPage);
  }
  public goToUsage() {
    this.navCtrl.push(UsagePage);
  }

  public goToLogin() {
    this.navCtrl.push(LoginPage);
  } 

  public goToOrder() {
    this.navCtrl.push(OrderPage);
  }

  public goToHandset() {
    this.navCtrl.push(HandsetPage);
  }

  public goToPayments() {
    this.navCtrl.push(PaymentsPage);
  }

  public goToContracts() {
    this.navCtrl.push(ContractsPage);
  }

  public goToAccountVerification() {
    this.navCtrl.push(AccountVerificationPage);
  }

  public goToFaq() {
    this.navCtrl.push(FaqPage);
  }

}