import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Connections } from '@util/connections';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(user) {
    const url = Connections.UrlServices.concat(Connections.loginEndPoint);
    return this.http.post(url, user, httpOptions);
  }

  register(user) {
    const url = Connections.UrlServices.concat(Connections.registerEndPoint);
    return this.http.post(url, user, httpOptions);
  }
}
