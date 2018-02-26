import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SunshineApiProvider } from '../../providers/sunshine-api/sunshine-api';
import { Handset } from '../../models/handset';
/**
 * Generated class for the HandsetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-handset',
  templateUrl: 'handset.html',
})
export class HandsetPage {
   
  public handset: Handset;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public sunshineApi: SunshineApiProvider) {

console.log(sunshineApi.getHandset());   
    sunshineApi.getHandset()
      .subscribe(data => {
        this.handset = data;
      });
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad HandsetPage');
  }

}
