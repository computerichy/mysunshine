import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
  
import { ProfilePage } from '../profile/profile';
import { PaymentsPage } from '../payments/payments';
import { HandsetPage } from '../handset/handset';
import { OrderPage } from '../order/order';
import { UsagePage } from '../usage/usage'; 
import { DeliveryPage } from '../delivery/delivery';
import { LoginPage } from '../login/login';
import { ContractsPage } from '../contracts/contracts';
import { Collection } from '../../models/collection';
import { AccountVerificationPage } from '../account-verification/account-verification';
import { FaqPage } from '../faq/faq';
import * as moment from 'moment';

import { SunnyProgressComponent } from '../../components/sunny-progress/sunny-progress';
import { AuthService } from '../../services/auth/auth';



import { SunshineApiProvider } from '../../providers/sunshine-api/sunshine-api';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nextCollection : Collection;
  greetingWord : string;

  constructor(public navCtrl: NavController, 
    public authService: AuthService, 
    public sunshineApi : SunshineApiProvider) {

    sunshineApi.getNextCollection()
      .subscribe(data => {
        this.nextCollection = data;
      });

    this.greetingWord = this.getGreetingTime(moment());


  }
 
  public goToProfile() {
    this.navCtrl.push('ProfilePage');
  }

  public goToDelivery() { 
    this.navCtrl.push('DeliveryPage');
  }

  public goToUsage() {
    this.navCtrl.push('UsagePage');
  }

  public goToLogin() {
    this.navCtrl.push('LoginPage');
  } 

  public goToOrder() {
    this.navCtrl.push('OrderPage');
  }

  public goToHandset() {
    this.navCtrl.push('HandsetPage');
  }

  public goToPayments() {
    this.navCtrl.push('PaymentsPage'); 
  }
 
  public goToContracts() {
    this.navCtrl.push('ContractsPage');
  }

  public goToAccountVerification() { 
    this.navCtrl.push('AccountVerificationPage');
  }

  public goToFaq() {
    this.navCtrl.push('FaqPage');
  }

  public getGreetingTime (m) { 
	var g = null; 
	
	if(!m || !m.isValid()) { return; } 
	
	var split_afternoon = 12; 
	var split_evening = 17;
	var currentHour = parseFloat(m.format("HH"));
	
	if(currentHour >= split_afternoon && currentHour <= split_evening) {
		g = "afternoon";
	} else if(currentHour >= split_evening) {
		g = "evening";
	} else {
		g = "morning";
	}
	
	return g;
     }



  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    
  }

}
