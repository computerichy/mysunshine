import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import * as jwtdecode from 'jwt-decode';
import { catchError, map, tap } from 'rxjs/operators';
import { of }         from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
 
import { Dialogs } from '@ionic-native/dialogs';

import * as CONSTANTS from '../../app/app.constants';

import { Profile } from '../../models/profile';
 
import { SunshineApiProvider } from '../../providers/sunshine-api/sunshine-api';

@Injectable()
export class AuthService {
   
 
    public profile : Profile;

    constructor(private http: HttpClient, 
                private dialogs: Dialogs,
                public sunshineApi: SunshineApiProvider) {

      if (this.isLoggedIn) {
         this.profile = JSON.parse(localStorage.getItem('authProfile')); 
      }
    }

    login(username:string, password:string ) {
        return this.http.post('https://sunshinemobile.co.uk:8097/api/login', {username, password})
          .pipe(
             tap(authResult => {  
               if (!authResult.hasOwnProperty('error'))
                 this.loadProfile(authResult);     
               console.log('login result ' , authResult);
                console.log('awdwa'); 
              return authResult;
             
            })
          );
    }

    private setSession(authResult, profile) {
    
      localStorage.setItem('authProfile', JSON.stringify(profile));
 
    }

    public loadProfile (authResult) {
      const token = authResult.authToken,
        tokenDecoded = jwtdecode(token);

      localStorage.setItem('authToken', authResult.authToken);
      localStorage.setItem('authExpiresAt', `${tokenDecoded.exp}`);      


      return this.sunshineApi.getProfile().subscribe((response) => {
            this.setSession(authResult, response);
            this.profile = response;
       });
    }

    public reloadProfile() {
      var promise = new Promise((resolve, reject) => {
        this.sunshineApi.getProfile().subscribe((response) => {
          this.profile = response;
          resolve();
         });
      });

      return promise;
     
    }

    public logout() {
      localStorage.removeItem('authToken');
      localStorage.removeItem('authExpiresAt');
      localStorage.removeItem('authProfile');
    }

    get isLoggedIn() : boolean {
      return moment().isBefore(this.getExpiration());
    }

    public getAuthToken() {
      return localStorage.getItem('authToken');
    }

    getExpiration() {
      const expiration = parseInt(localStorage.getItem('authExpiresAt'));
 
      return moment.unix(expiration);
    }
 
    
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        console.log('GOT AUTH COMMUNICATION ERROR ', error);
    
        this.dialogs.alert(`${operation} failed: ${error.message}`);

        return of(result as T);
      };
    }


}
