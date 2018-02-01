import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth/auth';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


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
              public navCtrl: NavController) {

    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  
   }

   attemptLogin() {
     const val = this.form.value;
     this.authService.login(val.email, val.password)
       .subscribe(
         () => {
           this.navCtrl.push(HomePage);
         }
       )

   }

}
