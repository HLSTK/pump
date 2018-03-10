import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawContentComponent } from './draw-content.component';

describe('DrawContentComponent', () => {
  let component: DrawContentComponent;
  let fixture: ComponentFixture<DrawContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
