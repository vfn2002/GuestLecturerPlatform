import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerBoxComponent } from './speaker-box.component';

describe('SpeakerBoxComponent', () => {
  let component: SpeakerBoxComponent;
  let fixture: ComponentFixture<SpeakerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
