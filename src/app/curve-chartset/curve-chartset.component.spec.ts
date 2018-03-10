import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurveChartsetComponent } from './curve-chartset.component';

describe('CurveChartsetComponent', () => {
  let component: CurveChartsetComponent;
  let fixture: ComponentFixture<CurveChartsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurveChartsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurveChartsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
