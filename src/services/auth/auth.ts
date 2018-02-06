import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import * as jwtdecode from 'jwt-decode';
import { catchError, map, tap } from 'rxjs/operators';
import { of }         from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
 
import { Dialogs } from '@ionic-native/dialogs';

import * as CONSTANTS from '../../app/app.constants';

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
    
      const token = authResult.authToken,
        tokenDecoded = jwtdecode(token);

      localStorage.setItem('authToken', authResult.authToken);
      localStorage.setItem('authExpiresAt', `${tokenDecoded.exp}`);

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
      const expiration = parseInt(localStorage.getItem('authExpiresAt'));
 
      return moment.unix(expiration);
    }
 
    
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        console.log(error);
    
        this.dialogs.alert(`${operation} failed: ${error.message}`);

        return of(result as T);
      };
    }


}
