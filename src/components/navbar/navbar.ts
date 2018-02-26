import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
 
import { LoginPage } from '../../pages/login/login';
import { ProfilePage } from '../../pages/profile/profile';
import { DeliveryPage } from '../../pages/delivery/delivery';
import { UsagePage } from '../../pages/usage/usage';
import { OrderPage } from '../../pages/order/order';
import { HandsetPage } from '../../pages/handset/handset';
import { PaymentsPage } from '../../pages/payments/payments';
import { ContractsPage } from '../../pages/contracts/contracts';
import { AccountVerificationPage } from '../../pages/account-verification/account-verification';
import { FaqPage } from '../../pages/faq/faq';


import { AuthService } from '../../services/auth/auth';



/**
 * Generated class for the NavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController, 
              public authService: AuthService) {

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

  public logout() {
    let alert = this.alertCtrl.create({
    title: 'Sign out',
    message: 'Are you sure you\'d like to sign out?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
     
        }
      },
      {
        text: 'Yes, sign me out',
        handler: () => {
          this.authService.logout();
          this.navCtrl.push(LoginPage);
        }
      }
    ]
   });
   alert.present();
  }

}
