import { PeopleShowByIdComponent } from './components/people/people-show-by-id/people-show-by-id.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleShowAllComponent } from './components/people/people-show-all/people-show-all.component';

const routes: Routes = [
  {
    path: "",    
    component: PeopleShowAllComponent
  },
  {
    path: "peoples",
    component: PeopleShowAllComponent
  },
  {
    path: "peoples/:id",
    component: PeopleShowByIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
