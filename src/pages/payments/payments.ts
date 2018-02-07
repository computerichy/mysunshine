import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


import { LatestPaymentsPage } from '../latest-payments/latest-payments';
import { TotalOverduePage } from '../total-overdue/total-overdue';

@IonicPage()
@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  public goToLatestPayments() {
    this.navCtrl.push(LatestPaymentsPage);
  }

  public goToTotalOverdue() {
    this.navCtrl.push(TotalOverduePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LatestPaymentsPage');
  }

}






