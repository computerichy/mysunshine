import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    login(email:string, password:string ) {
        return this.http.post('https://sunshinemobile.co.uk:8097/api/login', {email, password})
          .do(res => this.setSession);
    }

    private setSession(authResult) {
      const expiresAt = moment().add(authResult.expiresIn, 'second');

      localStorage.setItem('authToken', authResult.authToken);
      localStorage.setItem('authExpiresAt', expiresAt.valueOf());

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

}
