import { IAccountOrders } from './../model/IAccountOrders';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../model/IUser';
import { Observable, of } from 'rxjs';
import { UserLoginOutput } from '../model/UserLoginOutput';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  login(user: UserLoginOutput): Observable<UserLoginOutput> {
    const json = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<UserLoginOutput>('http://localhost:51316/api/User', json, { headers: headers });
  }

  register(user: User): Observable<UserLoginOutput> {
    const json = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<UserLoginOutput>('http://localhost:51316/api/User', json, { headers: headers });
  }

  userOrders(user: string): Observable<IAccountOrders> {
    return this.httpClient.get<IAccountOrders>('http://localhost:51316/api/Orders/' + user + '/information');
  }
}
