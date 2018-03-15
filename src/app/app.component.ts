import { Component, ViewChild } from '@angular/core';
import { HeaderColor } from '@ionic-native/header-color';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';
//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth/auth';
import { Nav, NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device'; 
import { AlertController } from 'ionic-angular';

// import {ProfilePage} from '../pages/profile/profile';


@Component({ 
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') navCtrl: NavController
  // @ViewChild(Nav) nav: Nav;
   
//  rootPage:any = HomePage;
    rootPage:any;

  constructor(platform: Platform, 
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public events: Events,
              public auth: AuthService,
              public headerColor: HeaderColor,
              private device: Device,
              public alertCtrl: AlertController, 
              public authService: AuthService
  
    ) {

      this.headerColor.tint('#ffa200');
  
       let deviceLocked = false;
    
       this.rootPage = deviceLocked 
       ? 'LockPage' : auth.isLoggedIn 
       ? 'HomePage' : 'LoginPage'; 

       platform.ready().then(() => {
         statusBar.backgroundColorByHexString('#ffdd00');
         statusBar.overlaysWebView(true);
         splashScreen.hide();
         this.subscribeEvents();
       });
 
  }


  public subscribeEvents() { 

    this.events.subscribe('user:logout', () => {
      if (!(this.navCtrl.getActive().instance instanceof LoginPage)) {
        this.navCtrl.setRoot('LoginPage', {}, {animate: true, direction: "forward"});
      }
    });

    this.events.subscribe('auth:ready', () => {
      
    });

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
 
  public goToHome() {
    this.navCtrl.push('HomePage');
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
          this.navCtrl.push('LoginPage');
        }
      }
    ]
   });
   alert.present();
  }



}

