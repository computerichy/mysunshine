import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs'; 
import { MenuController } from 'ionic-angular';
/**
 * Generated class for the PaymentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 

import { LatestPaymentsPage } from '../latest-payments/latest-payments';
import { TotalOverduePage } from '../total-overdue/total-overdue';

import { SunshineApiProvider } from '../../providers/sunshine-api/sunshine-api';

import { Collection } from '../../models/collection';

@IonicPage()
@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {
  
  nextCollection: Collection;
  collections: Collection[] = [];
  currentMonthCollections: Collection[] = [];
  amountOverdue: number = 0;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public sunshineApi: SunshineApiProvider,
              public menuCtrl: MenuController
            ) {
    
console.log("payments constructor");
    sunshineApi.getCollections()
      .subscribe(data => {
        this.collections = data;
        let now = new Date(); 
  
        for (let key in data) {
          let collection = data[key];
          let dueDate = new Date(collection.due_date);
        
          if (dueDate.getMonth() == now.getMonth() && dueDate.getFullYear() == now.getFullYear())
            this.currentMonthCollections.push(collection);   
   
          if (collection.status != 4 && now > dueDate) this.amountOverdue+=collection.amount;
           
        }        

      });

     sunshineApi.getNextCollection()
       .subscribe(data => {
         this.nextCollection = data;
         
       }); 
  
  }


  public goToLatestPayments() {
    this.navCtrl.push(LatestPaymentsPage);
  }

  public goToTotalOverdue() {
    this.navCtrl.push(TotalOverduePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LatestPaymentsPage');
  }

  public toggleMenu() {
     console.log('test menu');
     this.menuCtrl.open();
  }
}






