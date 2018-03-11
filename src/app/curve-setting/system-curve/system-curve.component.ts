import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-curve',
  templateUrl: './system-curve.component.html',
  styleUrls: ['./system-curve.component.css']
})
export class SystemCurveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class SystemCurve{
  constructor(
    public systemCurve:boolean,
    public staticHead:number
  ){}
}
