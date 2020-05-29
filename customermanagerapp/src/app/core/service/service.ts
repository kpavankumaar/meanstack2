import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
  getCustomer(id: number): Observable<any>{
    return this.http.get(this.url + '/' + id).pipe(
      map(customer => {
        return customer;
      }),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse){
    console.error('server error', err);
    if (err.error instanceof Error){
      const errMessage = err.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(err);
  }
}
