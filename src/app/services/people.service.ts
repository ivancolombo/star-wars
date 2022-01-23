import { PeopleRequest } from './../models/people.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { People } from '../models/people.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseUrl = "https://swapi.dev/api/people";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  getAll(page: number, name?: string): Observable<PeopleRequest> {
    const params = new HttpParams()
      .set('page', page)
      .set('search', name ?? '');
    return this.http.get<PeopleRequest>(`${this.baseUrl}?${params.toString()}`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  getById(id: string | null): Observable<People> {
    return this.http.get<People>(`${this.baseUrl}/${id}`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }
}
