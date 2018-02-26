import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Device } from '@ionic-native/device';
/**
 * Generated class for the LockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lock',
  templateUrl: 'lock.html',
})
export class LockPage {

  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public device: Device) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LockPage');
  }

}
