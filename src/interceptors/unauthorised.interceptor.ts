import { Injectable, Injector} from '@angular/core';

import { Component } from '@angular/core';
import 'rxjs/add/operator/do';
import { Events } from 'ionic-angular';
 
import {
  HttpRequest,
  HttpHandler,
  HttpEvent, 
  HttpResponse,
  HttpErrorResponse,
  HttpInterceptor
} from '@angular/common/http'; 

import { LoginPage } from '../pages/login/login';


@Injectable() 
export class UnauthorisedInterceptor implements HttpInterceptor {
  constructor(public events: Events) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) { 
          this.events.publish('user:logout');
          console.log('unauth!');
   
        }
      }
    });
  }
}
