import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bare-pump',
  templateUrl: './bare-pump.component.html',
  styleUrls: ['./bare-pump.component.css']
})
export class BarePumpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class BarePump{
  constructor(
    public pumpModel:number,
    public _type:number,
    public flangeRating:number
  ){}
}
