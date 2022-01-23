import { PeopleService } from './../../../services/people.service';
import { People } from './../../../models/people.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getId } from 'src/app/helpers/get-id';

@Component({
  selector: 'app-people-show-all',
  templateUrl: './people-show-all.component.html',
  styleUrls: ['./people-show-all.component.css']
})
export class PeopleShowAllComponent implements OnInit {

  peoples: People[];
  
  constructor(
    private peopleService: PeopleService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.peopleService.getAll().subscribe(response => {
      this.peoples = response.results;     
    });
  }

  redirect(url: string): void {
    const id = getId(url);
    this.router.navigate([`/peoples/${id}`]);
  }
}
