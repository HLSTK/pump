import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurveSettingComponent } from './curve-setting.component';

describe('CurveSettingComponent', () => {
  let component: CurveSettingComponent;
  let fixture: ComponentFixture<CurveSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurveSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurveSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
