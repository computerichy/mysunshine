import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SunshineApiProvider } from '../../providers/sunshine-api/sunshine-api';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { AuthService } from '../../services/auth/auth';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [SunshineApiProvider] 
})
export class ProfilePage {
 
  private profile = {};
  private updateProfile: FormGroup;
  private editMode: boolean = false; 
 
    
  constructor( public navCtrl: NavController, 
               public navParams: NavParams,
               private sunshineApi: SunshineApiProvider,
               private formBuilder: FormBuilder,
               public loadingCtrl: LoadingController,
               public authService: AuthService) {




    
                this.updateProfile = this.formBuilder.group({
                  title: ['', Validators.required],
                  forename: ['', Validators.required],
                  surname: ['', Validators.required],
                  address1: ['', Validators.required],
                  address2: ['', Validators.required],
                  address3: ['', Validators.required],
                  postcode: ['', Validators.required],
                  tel_home: ['', Validators.required],
                  email: ['', Validators.required]
                });
 
                
    let profileObservable = this.sunshineApi.getProfile().subscribe(data => {
        this.profile = data;
        this.updateProfile.patchValue(data);
    });     

  }

  ionViewDidLoad() {
       
  }

  public enterEditMode() {
    this.editMode = true;
  }

  public putProfile() {

    let loader = this.loadingCtrl.create({
      content: 'Saving your changes, please wait...',
    });

    loader.present(); 
    
    this.sunshineApi.updateProfile(JSON.stringify(this.updateProfile.value)).subscribe(
      data => {
        this.profileUpdateCompleted(loader);
      },
      err => {
       this.profileUpdateCompleted(loader);
      });

    console.log(this.updateProfile.value);
  }


  private profileUpdateCompleted(loader) {
    
    
    this.authService.reloadProfile().then(data => {
      loader.dismiss();
      this.navCtrl.setRoot('HomePage', {}, {animate: true, direction: "forward"});
  
    });

  }
}
