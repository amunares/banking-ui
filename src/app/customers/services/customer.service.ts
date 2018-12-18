import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ICustomer } from 'src/app/customers/customer';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json '})
  };

@Injectable()
export class CustomerService {

    constructor(private http:HttpClient) { }

    getCustomers() {
      return this.http.get<any>('/server/api/customers').pipe(
        tap(data => console.log('All: '+ JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

    getCustomer(id: number){
      return this.http.get<any>('/server/api/customers/'+ id).pipe(
        tap(data => console.log('Customer: '+ JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

    private handleError(err: HttpErrorResponse) {
      // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
    }
}