import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle = "";
  pageDesc = "";

  constructor(public router: Router) {
    router.events
      .subscribe((event:NavigationEnd) =>{
        if(event.url == '/curve-content')
        {
          this.pageTitle = '泵曲线';
          this.pageDesc = '泵曲线图形参数设置与查询';
        }
        else if(event.url == '/draw-content')
        {
          this.pageTitle = '图纸';
          this.pageDesc = '泵图纸参数设置与查询';
        }
    })
  }

  ngOnInit() {
  }

}
