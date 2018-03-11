import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallel',
  templateUrl: './parallel.component.html',
  styleUrls: ['./parallel.component.css']
})
export class ParallelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class Parallel
{
  constructor(
    public _type:string,
    public trimDia:String,
    public poles:String,
    public effi:String,
    public frequency:String,
    public speed:number,
    public q:number,
    public h:number,
    public multiConversion:number,
    public connectionNum:number
  ){}
}
