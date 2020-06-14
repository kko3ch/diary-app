import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryPreviewComponent } from './diary-preview.component';

describe('DiaryPreviewComponent', () => {
  let component: DiaryPreviewComponent;
  let fixture: ComponentFixture<DiaryPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
