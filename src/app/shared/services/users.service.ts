import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Connections } from '@util/connections';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    const url = Connections.UrlServices.concat(Connections.usersEndPoint);
    return this.http.get(url);
  }

  deleteUser(id: string) {
    const url = Connections.UrlServices.concat(Connections.usersEndPoint + id);
    return this.http.delete(url);
  }
}
