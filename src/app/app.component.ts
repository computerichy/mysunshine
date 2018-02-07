import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { AuthService } from '../services/auth/auth';
 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
   

  constructor(platform: Platform, 
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public events: Events,
              public auth: AuthService
  
    ) {

    
      this.rootPage = auth.isLoggedIn() ? HomePage : LoginPage;  
         
 
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.subscribeEvents();
    });
  }

  

  public subscribeEvents() { 

    this.events.subscribe('user:logout', () => {
      this.rootPage = LoginPage;
    });
 

  }  


}

