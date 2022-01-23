import { PeopleRequest } from './../models/people.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseUrl = "https://swapi.dev/api/people";

  constructor(private http: HttpClient) { }

  getAll(page: number, name?: string): Observable<PeopleRequest> {
    const params = new HttpParams()
      .set('page', page)
      .set('search', name ?? '');
    return this.http.get<PeopleRequest>(`${this.baseUrl}?${params.toString()}`);
  }

  getById(id: string | null): Observable<People> {
    return this.http.get<People>(`${this.baseUrl}/${id}`);
  }
}
