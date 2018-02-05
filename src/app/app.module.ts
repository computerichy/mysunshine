
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
    
 
import { HttpClientModule } from '@angular/common/http';
import { Dialogs } from '@ionic-native/dialogs'; 


//Pages ======================

import { MyApp } from './app.component'; 
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { PaymentsPage } from '../pages/payments/payments';
import { UsagePage } from '../pages/usage/usage';
import { HandsetPage } from '../pages/handset/handset';
import { OrderPage} from '../pages/order/order';
import { DeliveryPage } from '../pages/delivery/delivery';
import { TotalOverduePage } from '../pages/total-overdue/total-overdue';
import { LatestPaymentsPage } from '../pages/latest-payments/latest-payments';
import { FaqPage } from '../pages/faq/faq';
import { AccountVerificationPage } from '../pages/account-verification/account-verification';
import { ContractsPage } from '../pages/contracts/contracts';


//Custom components =====================

import { SunnyProgressComponent } from '../components/sunny-progress/sunny-progress';
import { LoginComponent } from '../components/login/login';
import { AuthService } from '../services/auth/auth';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    UsagePage,
    HandsetPage,
    OrderPage,
    DeliveryPage,
    ProfilePage,
    PaymentsPage,
    SunnyProgressComponent,
    LoginComponent,
    TotalOverduePage,
    LatestPaymentsPage,
    FaqPage,
    AccountVerificationPage,
    ContractsPage
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
    ProfilePage,
    UsagePage,
    HandsetPage,
    OrderPage,
    PaymentsPage,
    DeliveryPage, 
    TotalOverduePage,
    LatestPaymentsPage,
    FaqPage,
    AccountVerificationPage,
    ContractsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
