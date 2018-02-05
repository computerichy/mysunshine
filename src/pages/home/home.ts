import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { DeliveryPage } from '../delivery/delivery';
import { UsagePage } from '../usage/usage';
import { OrderPage } from '../order/order';
import { HandsetPage } from '../handset/handset';
import { PaymentsPage } from '../payments/payments';

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



}