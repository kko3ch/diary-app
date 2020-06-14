import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryEventsComponent } from './diary-events.component';

describe('DiaryEventsComponent', () => {
  let component: DiaryEventsComponent;
  let fixture: ComponentFixture<DiaryEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
