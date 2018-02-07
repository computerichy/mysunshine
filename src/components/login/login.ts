import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth/auth';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { LoadingController } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
 
  private form : FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              public navCtrl: NavController,
              public loadingCtrl: LoadingController) {

    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  
   }

   attemptLogin() {

     let loader = this.loadingCtrl.create({
       content: 'Signing in, please wait...',
     });

     loader.present();

     this.authService.login(this.form.value.username, this.form.value.password)
       .subscribe(
         data => {
             loader.dismiss();               
             console.log("LOGIN SUCCESS - SET ROOT TO HOME");
             this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: "forward"});
         },
         err => {
          loader.dismiss();
          if (err.error) {
             switch (err.error) {
               case 'NOT_FOUND': {
                 break;
               }
               case 'PASSWORD_INCORRECT': {
                 break;
               }
             }

            }
            

         }
        
       )

   }

}
