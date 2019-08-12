import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { AuthState } from '@core-store/auth.state';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const authToken = this.store.selectSnapshot(AuthState.token);

    const authReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + authToken
      })
    });

    return next.handle(authReq);
  }
}