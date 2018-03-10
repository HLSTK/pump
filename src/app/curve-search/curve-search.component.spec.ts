import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurveSearchComponent } from './curve-search.component';

describe('CurveSearchComponent', () => {
  let component: CurveSearchComponent;
  let fixture: ComponentFixture<CurveSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurveSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurveSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
