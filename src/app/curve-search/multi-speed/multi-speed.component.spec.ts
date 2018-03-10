import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSpeedComponent } from './multi-speed.component';

describe('MultiSpeedComponent', () => {
  let component: MultiSpeedComponent;
  let fixture: ComponentFixture<MultiSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
