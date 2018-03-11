import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-speed',
  templateUrl: './multi-speed.component.html',
  styleUrls: ['./multi-speed.component.css']
})
export class MultiSpeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class MultiSpeed
{
  constructor(
    public _type:String,
    public trimDia:String,
    public poles:String,
    public effi:String,
    public frequency:String,
    public speed:String,
    public q:number,
    public h:number,
    public multiConversion:number,
    //TODO
  )
  {}
}
