import { FilmService } from './../../../services/film.service';
import { Film } from './../../../models/film.model';
import { PeopleService } from './../../../services/people.service';
import { People } from './../../../models/people.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getId } from 'src/app/helpers/get-id';

@Component({
  selector: 'app-people-show-by-id',
  templateUrl: './people-show-by-id.component.html',
  styleUrls: ['./people-show-by-id.component.css']
})
export class PeopleShowByIdComponent implements OnInit {

  people: People;
  films: Film[];

  constructor(
    private peopleService: PeopleService,
    private filmService: FilmService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.peopleService.getById(id).subscribe(people => {
      this.people = people;
      this.getFilms(this.people.films);
    });
  }

  getFilms(films: string[]): void {
    const filmsArr: Film[] = [];
    films.forEach(urlFilm => {
      const filmId = getId(urlFilm);
      this.filmService.getById(filmId).subscribe(film => {
        filmsArr.push(film);
      });
    });
    this.films = filmsArr;   
  }
}
