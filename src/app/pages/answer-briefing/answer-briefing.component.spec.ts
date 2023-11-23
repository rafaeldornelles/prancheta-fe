import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerBriefingComponent } from './answer-briefing.component';

describe('AnswerBriefingComponent', () => {
  let component: AnswerBriefingComponent;
  let fixture: ComponentFixture<AnswerBriefingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnswerBriefingComponent]
    });
    fixture = TestBed.createComponent(AnswerBriefingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
