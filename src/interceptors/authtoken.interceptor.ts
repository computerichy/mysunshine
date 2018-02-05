import { Injectable } from '@angular/core';
 
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { AuthService } from '../services/auth/auth';

import { Observable } from 'rxjs/Observable';
 

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getAuthToken()}`
      }
    });
    return next.handle(request);
  }
}
