import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.shouldExclude(request.url)) {
      return next.handle(request); // Skip interception for excluded URLs
    }

    const token = sessionStorage.getItem('jwtToken');
    // If token exists, clone the request and add the token to the Authorization header
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }

  private shouldExclude(url: string): boolean {
    return url.includes('/authenticate') || url.startsWith('/user/');
  }
}
