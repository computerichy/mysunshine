import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
 
import { catchError, map, tap } from 'rxjs/operators';
import { of }         from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';

import { Dialogs } from '@ionic-native/dialogs';


@Injectable()
export class AuthService {

    constructor(private http: HttpClient, 
                private dialogs: Dialogs) {
    }

    login(email:string, password:string ) {
        return this.http.post('https://sunshinemobile.co.uk:8097/api/login', {email, password})
          .pipe(
             tap(authResult => {  
              this.setSession(authResult);
              return authResult;
            }),
            catchError(this.handleError('login', []))
        );

    }

    private setSession(authResult) {
    
      const token = authResult.authToken;

       
      
     
      const expiresAt = moment().add(authResult.expiresIn, 'second');

      localStorage.setItem('authToken', authResult.authToken);
      localStorage.setItem('authExpiresAt', `${expiresAt.valueOf()}`);

    }

    private logout() {

      localStorage.removeItem('authToken');
      localStorage.removeItem('authExpiresAt');

    }

    public isLoggedIn() {

      return moment().isBefore(this.getExpiration());

    }

    public getAuthToken() {
      return localStorage.getItem('authToken');
    }

    getExpiration() {
      const expiration = localStorage.getItem('authExpiresAt');
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }
 
    
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        console.log(error);
    
        this.dialogs.alert(`${operation} failed: ${error.message}`);

        return of(result as T);
      };
    }


}
