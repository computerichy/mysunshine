import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth/auth';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { LoadingController } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';



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
              private dialogs : Dialogs,
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
             if (data['error']) {
              switch (data['error']) {
                case 'NOT_FOUND': {
                  this.dialogs.alert('That user could not be found. Please try again.', 'Incorrect user', 'OK');
                  break;
                }
                case 'USERNAME_BLANK' : {
                  this.dialogs.alert('Please enter a username.', 'Enter username', 'OK');
                  break;
                }
                case 'PASSWORD_INCORRECT': {
                  this.dialogs.alert('Incorrect password entered. Please try again.', 'Incorrect password', 'OK');
                  break;
                }
                default: {
                  this.dialogs.alert('An unknown login error occurred. Please contact the Sunshine Customer Support Line.', 'Login error', 'OK');
                }
              }

             } else  {
              console.log("LOGIN SUCCESS - SET ROOT TO HOME");
              this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: "forward"});
             }

         },
         err => {
          loader.dismiss();


         }

       )

   }

}
