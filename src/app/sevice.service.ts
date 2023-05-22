import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { environmentprd} from 'src/environments/environment.prod';
import { environmentdvp } from 'src/environments/environment';
import { PageSheet, SheetResult } from './models/page-sheet';
import { Observable, catchError, concatMap, throwError } from 'rxjs';
import { AuthToken } from './models/auth-token';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  environment = isDevMode() ? environmentdvp : environmentprd
  url = this.environment.baseUrl
  body={
    email:this.environment.publicUser,
    password:this.environment.publicPass
  }
  
  constructor(private http: HttpClient) { }

  insertPage(row:PageSheet, userId:string, sheetsId:string, bearer_token:string):Observable<SheetResult>{

    let options = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'Authorization': `Bearer ${bearer_token}`
      }),
      params: new HttpParams()
    }

    options.params.set('userId', userId).set('sheetsId',sheetsId)
    return this.http.post<SheetResult>(this.url+"sheets/new", row, options).pipe(catchError(this.errorHandl))
  }

  insertRow(row:PageSheet, userId:string, sheetsId:string,):Observable<SheetResult>{
    return this.http.post<AuthToken>(this.url+"auth", this.body).pipe(
      concatMap(result => this.http.post<SheetResult>(this.url+"sheets", row, {
        headers: new HttpHeaders({
          'content-Type': 'application/json',
          'Authorization': `Bearer ${result.access_token}`
        }),
        params: new HttpParams().set('userId', userId).set('sheetsId',sheetsId)
      }).pipe(catchError(this.errorHandl)))) 
  }

  errorHandl(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
