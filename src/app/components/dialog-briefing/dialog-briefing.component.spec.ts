import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBriefingComponent } from './dialog-briefing.component';

describe('DialogBriefingComponent', () => {
  let component: DialogBriefingComponent;
  let fixture: ComponentFixture<DialogBriefingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogBriefingComponent]
    });
    fixture = TestBed.createComponent(DialogBriefingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
