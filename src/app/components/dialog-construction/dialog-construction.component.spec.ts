import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConstructionComponent } from './dialog-construction.component';

describe('DialogConstructionComponent', () => {
  let component: DialogConstructionComponent;
  let fixture: ComponentFixture<DialogConstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogConstructionComponent]
    });
    fixture = TestBed.createComponent(DialogConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
