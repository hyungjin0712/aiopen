import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class Textdavinci003Service {

  constructor(private http: HttpClient) { }

  apiURL = 'https://api.openai.com/v1/completions';

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json', 
          'Authorization' : 'Bearer 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',
    })
  }
  postCompletition(payload : any): Observable<any> {
    return this.http.post<any>(this.apiURL, JSON.stringify(payload), this.httpOptions).pipe(
      retry(1), 
      catchError(this.handleError)  
    )
  }
  handleError(error : any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}' ;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
