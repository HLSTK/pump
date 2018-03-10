import { Component, OnInit } from '@angular/core';
import {Menu} from '../app-menu/menu.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-curve-content',
  templateUrl: './curve-content.component.html',
  styleUrls: ['./curve-content.component.css']
})
export class CurveContentComponent implements OnInit {
  constructor(public router: Router) { }

  ngOnInit() {}

}
