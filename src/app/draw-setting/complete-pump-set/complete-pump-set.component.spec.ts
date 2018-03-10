import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletePumpSetComponent } from './complete-pump-set.component';

describe('CompletePumpSetComponent', () => {
  let component: CompletePumpSetComponent;
  let fixture: ComponentFixture<CompletePumpSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletePumpSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletePumpSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
