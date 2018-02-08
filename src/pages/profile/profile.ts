import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SunshineApiProvider } from '../../providers/sunshine-api/sunshine-api';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [SunshineApiProvider]
})
export class ProfilePage {

  private profile = {};
   
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private sunshineApi: SunshineApiProvider) {
  
    this.sunshineApi.getProfile().subscribe(data => {
        console.log(data);
        this.profile = data;
    });     






  }

  ionViewDidLoad() {
       
  }

}
