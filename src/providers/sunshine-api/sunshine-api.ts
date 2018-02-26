import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from '../../app/app.constants';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators/catchError';
import { Profile } from '../../models/profile';
import { Collection } from '../../models/collection';
import { Usage } from '../../models/usage';
import { Handset } from '../../models/handset';

import {Observable} from 'rxjs/Observable';
 
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

   public getProfile() : Observable<Profile> {
     return this.http.get<Profile>(this.API_URL+'profile');
       //.map(response => {
        //  return new Profile(response);
      // });
   }

   public getCollections(): Observable<Collection[]> {
     console.log('getcollections'); 
     return this.http.get<Collection[]>(this.API_URL+'collections');
   }

   public getNextCollection(): Observable<Collection> {
     return this.http.get<Collection>(this.API_URL+'collections?next');
   }

   public getUsage(): Observable<Usage> {
     return this.http.get<Usage>(this.API_URL+'usage');
   }

   public getHandset(): Observable<Handset> { 
     return this.http.get<Handset>(this.API_URL+'handset');
   } 

   private handleError(error: Response) {
     return console.error(error.statusText);
   }

}
