import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-curve-chartset',
  templateUrl: './curve-chartset.component.html',
  styleUrls: ['./curve-chartset.component.css']
})
export class CurveChartsetComponent implements OnInit {

  tabs: Array<Tab>;
  currentTabId: number;
  constructor(public router: Router) { }

  ngOnInit() {
    this.tabs = [
      new Tab(1, 'Curve Setting', './', 'fa fa-gear'),
      new Tab(2, 'Chart', './curve-chart', 'fa fa-line-chart')
    ];
    this.currentTabId = 2;
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
