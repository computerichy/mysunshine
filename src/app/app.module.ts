import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { HttpClientModule } from '@angular/common/http';
 

import { MyApp } from './app.component'; 
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
 
 
import { SunnyProgressComponent } from '../components/sunny-progress/sunny-progress';
import { LoginComponent } from '../components/login/login';
import { AuthService } from '../services/auth/auth';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    SunnyProgressComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
