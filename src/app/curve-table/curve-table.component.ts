import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curve-table',
  templateUrl: './curve-table.component.html',
  styleUrls: ['./curve-table.component.css']
})
export class CurveTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class CurveFunctionTable
{
  constructor(
    public _type:string,
    public trimData:string,
    public impeller:string,
    public effNpshr:string,
    public powerRa:string,
    public powerM:string,
    public motorFrame:string,
    public frequency:string,
    public polesMotor:string,
    public flowBeep:string
  ){}
}
