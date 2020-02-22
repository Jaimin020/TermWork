import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { user } from './User';
const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})

export class DbCrudService {
  // tslint:disable-next-line: variable-name
  private _url = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  public getData(s: string): Observable<any> {
    console.log(s);
    var a: any;

    return this.http.post<any>('http://localhost:8000/details/' + s, {
      headers:headers
    });
  }

  public loginData(s: string, o: string): Observable<any> {
      return this.http.post<any>('http://localhost:8000/login/' + s, o, {
        headers:headers
      });
  }

  public InsertData(s: string, o: string): Observable<any> {
    return this.http.post<any>('http://localhost:8000/insert/' + s, o, {
      headers:headers
    });
  }

  public LocationData(): Observable<any> {
    return this.http.post<any>('http://localhost:8000/location', {
      headers:headers
    });
  }
}
