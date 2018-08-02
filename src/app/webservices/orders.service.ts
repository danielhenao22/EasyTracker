import { CITIES, STATUS, COMPANIES } from '../constans/constans';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { IOrder } from '../model/IOrder';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  getOrders(username: string): Observable<IOrder[]> {
    return this.httpClient.get<IOrder[]>('http://localhost:51316/api/Orders/' + username);
  }

  getCities(id: string): Observable<string> {
    return of(CITIES.filter(city => city.id === id).map(c => c.name)[0]);
  }

  getStatus(id: string): Observable<string> {
    return of(STATUS.filter(status => status.id === id).map(s => s.name)[0]);
  }
  getCompanies(id: string): Observable<string> {
    return of(COMPANIES.filter(companies => companies.id === id).map(c => c.name)[0]);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }
}
