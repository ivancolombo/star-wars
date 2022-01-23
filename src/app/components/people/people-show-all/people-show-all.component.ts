import { PeopleService } from './../../../services/people.service';
import { People } from './../../../models/people.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getId } from 'src/app/helpers/get-id';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-people-show-all',
  templateUrl: './people-show-all.component.html',
  styleUrls: ['./people-show-all.component.css']
})
export class PeopleShowAllComponent implements OnInit {

  peoples: People[];
  displayedColumns = ["name", "action"];

  totalPeoples = 0;
  page = 1;
  pageSizeOptions: number[] = [10]
  
  constructor(
    private peopleService: PeopleService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.list(this.page);
  }

  list(page: number, name: string = ''): void {
    this.peopleService.getAll(page, name).subscribe(response => {
      this.peoples = response.results;     
      this.totalPeoples = response.count;
    });
  }

  paginate(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.list(this.page);
  }

  search() {
    const name = (<HTMLInputElement>document.getElementById("search")).value;
    
    this.page = 1;
    this.list(this.page, name);
  }

  redirect(url: string): void {
    const id = getId(url);
    this.router.navigate([`/peoples/${id}`]);
  }
}
