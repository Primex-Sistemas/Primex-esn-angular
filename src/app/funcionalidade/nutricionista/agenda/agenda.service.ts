import { retry, catchError } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { Agenda } from './model/calendar';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  apiJson = environment.JSONMOCK;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getAgenda(): Observable<Agenda[]> {
    return this.httpClient.get<Agenda[]>(this.apiJson + 'agenda/')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
