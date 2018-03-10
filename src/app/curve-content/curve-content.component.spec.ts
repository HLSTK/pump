import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurveContentComponent } from './curve-content.component';

describe('CurveContentComponent', () => {
  let component: CurveContentComponent;
  let fixture: ComponentFixture<CurveContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurveContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurveContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
