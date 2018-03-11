import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curve-set',
  templateUrl: './curve-set.component.html',
  styleUrls: ['./curve-set.component.css']
})
export class CurveSetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class CurveSet{
  constructor(
    public workArea:boolean,
    public maxMinDiaCurve:boolean
  ){}
}
