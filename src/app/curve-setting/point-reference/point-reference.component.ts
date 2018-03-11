import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-reference',
  templateUrl: './point-reference.component.html',
  styleUrls: ['./point-reference.component.css']
})
export class PointReferenceComponent implements OnInit {

  pointReference:PointReference;

  constructor() { }

  ngOnInit() {
    this.pointReference = new PointReference(
      false,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    );
  }

}

export class PointReference{
  constructor(
    public isInsert:boolean,
    public q1:number,
    public h_1:number,
    public q2:number,
    public h_2:number,
    public q3:number,
    public h_3:number,
    public q4:number,
    public h_4:number,
    public q5:number,
    public h_5:number,
    public q6:number,
    public h_6:number
  ){}
}
