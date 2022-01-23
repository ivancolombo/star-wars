import { Film } from './../models/film.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private baseUrl = "https://swapi.dev/api/films";

  constructor(private http: HttpClient) { }

  getById(id: string) {
    return this.http.get<Film>(`${this.baseUrl}/${id}`);
  }
}
