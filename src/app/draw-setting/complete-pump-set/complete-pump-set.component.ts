import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-pump-set',
  templateUrl: './complete-pump-set.component.html',
  styleUrls: ['./complete-pump-set.component.css']
})
export class CompletePumpSetComponent implements OnInit {
  completePumpSet:CompeletePumpSet;

  constructor() { }

  ngOnInit() {
    this.completePumpSet = new CompeletePumpSet(
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      'cw',
    );
  }

}

export class CompeletePumpSet{
  constructor(
    public frequency:number,
    public _type:number,
    public flangRating:number,
    public motorBrand:number,
    public poles:number,
    public moterPower:number,
    public voltage:number,
    public coupling:number,
    public rotaion:string
  ){}
}
