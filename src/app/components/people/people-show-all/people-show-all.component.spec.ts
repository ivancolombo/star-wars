import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleShowAllComponent } from './people-show-all.component';

describe('PeopleShowAllComponent', () => {
  let component: PeopleShowAllComponent;
  let fixture: ComponentFixture<PeopleShowAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleShowAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleShowAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
