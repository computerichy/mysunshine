import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';



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
})
export class ProfilePage {


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private http: HttpClient) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
     
    this.http.get('https://sunshinemobile.co.uk:8097/api/profile')
      .subscribe(hello => {});   
  }

}
