import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarePumpComponent } from './bare-pump.component';

describe('BarePumpComponent', () => {
  let component: BarePumpComponent;
  let fixture: ComponentFixture<BarePumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarePumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarePumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
