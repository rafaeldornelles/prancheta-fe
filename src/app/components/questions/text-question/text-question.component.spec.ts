import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextQuestionComponent } from './text-question.component';

describe('TextQuestionComponent', () => {
  let component: TextQuestionComponent;
  let fixture: ComponentFixture<TextQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextQuestionComponent]
    });
    fixture = TestBed.createComponent(TextQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
