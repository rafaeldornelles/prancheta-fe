import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleQuestionComponent } from './multiple-question.component';

describe('MultipleQuestionComponent', () => {
  let component: MultipleQuestionComponent;
  let fixture: ComponentFixture<MultipleQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleQuestionComponent]
    });
    fixture = TestBed.createComponent(MultipleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
