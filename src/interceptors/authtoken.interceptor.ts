import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';

 
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
  constructor(private injector: Injector) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    const auth = this.injector.get(AuthService);    
   
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${auth.getAuthToken()}`
      }
    });
    return next.handle(request);
  }
}
