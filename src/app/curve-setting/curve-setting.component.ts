import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-curve-setting',
  templateUrl: './curve-setting.component.html',
  styleUrls: ['./curve-setting.component.css']
})
export class CurveSettingComponent implements OnInit {

  tabs: Array<Tab>;
  currentTabId: number;
  constructor(public router: Router) { }

  ngOnInit() {
    this.tabs = [
      new Tab(1, 'Curve Set', './', 'fa fa-gear'),
      new Tab(2, 'Point reference', './point-reference', 'fa fa-dot-circle-o'),
      new Tab(3, 'System Curve', './system-curve', 'fa fa-archive')
    ];
    this.currentTabId = 1;
  }

  nav(tab: Tab){
    this.currentTabId = tab.id;
  }
}

export class Tab {
  constructor(public id: number,
              public name: string,
              public link: string,
              public icon: string) { }
}
