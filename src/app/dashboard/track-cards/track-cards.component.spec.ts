import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackCardsComponent } from './track-cards.component';

describe('TrackCardsComponent', () => {
  let component: TrackCardsComponent;
  let fixture: ComponentFixture<TrackCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
