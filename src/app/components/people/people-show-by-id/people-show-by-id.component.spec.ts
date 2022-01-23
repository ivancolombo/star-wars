import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleShowByIdComponent } from './people-show-by-id.component';

describe('PeopleShowByIdComponent', () => {
  let component: PeopleShowByIdComponent;
  let fixture: ComponentFixture<PeopleShowByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleShowByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleShowByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
