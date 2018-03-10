import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawSettingComponent } from './draw-setting.component';

describe('DrawSettingComponent', () => {
  let component: DrawSettingComponent;
  let fixture: ComponentFixture<DrawSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
