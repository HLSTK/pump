import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawPdfComponent } from './draw-pdf.component';

describe('DrawPdfComponent', () => {
  let component: DrawPdfComponent;
  let fixture: ComponentFixture<DrawPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
