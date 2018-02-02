import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestLecturerItemComponent } from './guest-lecturer-item.component';

describe('GuestLecturerItemComponent', () => {
  let component: GuestLecturerItemComponent;
  let fixture: ComponentFixture<GuestLecturerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestLecturerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestLecturerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
