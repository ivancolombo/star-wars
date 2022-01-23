import { PeopleRequest } from './../models/people.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseUrl = "https://swapi.dev/api/people";

  constructor(private http: HttpClient) { }

  getAll(): Observable<PeopleRequest> {
    return this.http.get<PeopleRequest>(this.baseUrl);
  }

  getById(id: string | null): Observable<People> {
    return this.http.get<People>(`${this.baseUrl}/${id}`);
  }
}
