import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindGuestLecturersComponent } from './find-guest-lecturers.component';

describe('FindGuestLecturersComponent', () => {
  let component: FindGuestLecturersComponent;
  let fixture: ComponentFixture<FindGuestLecturersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindGuestLecturersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindGuestLecturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
