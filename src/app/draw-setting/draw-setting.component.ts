import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-draw-setting',
  templateUrl: './draw-setting.component.html',
  styleUrls: ['./draw-setting.component.css']
})
export class DrawSettingComponent implements OnInit {

  tabs: Array<Tab>;
  currentTabId: number;
  constructor(public router: Router) { }

  ngOnInit() {
    this.tabs = [
      new Tab(1, 'Complete Pump Set', './', 'fa fa-gears'),
      new Tab(2, 'Bare Pump', './', 'fa fa-gear')
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
