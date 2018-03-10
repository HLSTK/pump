import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurveSetComponent } from './curve-set.component';

describe('CurveSetComponent', () => {
  let component: CurveSetComponent;
  let fixture: ComponentFixture<CurveSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurveSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurveSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
