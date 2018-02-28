import { Component, ViewChild } from '@angular/core';
import { HeaderColor } from '@ionic-native/header-color';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';
//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth/auth';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device'; 
  

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: NavController
   
//  rootPage:any = HomePage;
    rootPage:any;

  constructor(platform: Platform, 
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public events: Events,
              public auth: AuthService,
              public headerColor: HeaderColor,
              private device: Device
  
    ) {

      this.headerColor.tint('#ffa200');
  
       let deviceLocked = false;
    
       this.rootPage = deviceLocked 
       ? 'LockPage' : auth.isLoggedIn 
       ? 'HomePage' : 'LoginPage'; 


       platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.

//          statusBar.styleDefault();

        statusBar.backgroundColorByHexString('#ffdd00');
        statusBar.overlaysWebView(true);
        splashScreen.hide();
        this.subscribeEvents();
       });

  }


  public subscribeEvents() { 

    this.events.subscribe('user:logout', () => {
      if (!(this.nav.getActive().instance instanceof LoginPage)) {
        this.nav.setRoot('LoginPage', {}, {animate: true, direction: "forward"});
      }
    });

    this.events.subscribe('auth:ready', () => {
      
    });
 

 
 

  }  


}

