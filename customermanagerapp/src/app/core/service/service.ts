import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Service {
  url = '/api/customers';
  constructor(private http: HttpClient) { }
  getCustomers(): Observable<any>{
    return this.http.get(this.url).pipe(
      map(res => res)
    );
  }

}
