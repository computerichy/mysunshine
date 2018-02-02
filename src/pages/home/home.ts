import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';

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

  public goToLogin() {
    this.navCtrl.push(LoginPage);
  }


}
