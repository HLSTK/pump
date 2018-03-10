import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointReferenceComponent } from './point-reference.component';

describe('PointReferenceComponent', () => {
  let component: PointReferenceComponent;
  let fixture: ComponentFixture<PointReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
