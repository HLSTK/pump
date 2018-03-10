import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-curve-search',
  templateUrl: './curve-search.component.html',
  styleUrls: ['./curve-search.component.css']
})
export class CurveSearchComponent implements OnInit {
  tabs: Array<Tab>;
  currentTabId: number;
  constructor(public router: Router) { }

  ngOnInit() {
    this.tabs = [
      new Tab(1, 'Selection', './selection', 'fa fa-search'),
      new Tab(2, 'Multi-Speed', './multi-speed', 'fa fa-maxcdn'),
      new Tab(3, 'Parallel', './parallel', 'fa fa-arrows-h')
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
