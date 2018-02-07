import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from '../../app/app.constants';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators/catchError';
import { Profile } from '../../models/profile';


/*
  Generated class for the SunshineApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SunshineApiProvider {

  API_URL = constants.API_URL;

  constructor(public http: HttpClient) {
    console.log('Hello SunshineApiProvider Provider');
    console.log(this.API_URL);
  }

   public getProfile() {
     return this.http.get<Profile>(this.API_URL+'profile');
       //.map(response => {
        //  return new Profile(response);
      // });
   }

   private handleError(error: Response) {
     return console.error(error.statusText);
   }

}
