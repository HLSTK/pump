import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  selection:Selection;
  constructor() { }

  ngOnInit() {
    this.selection = new Selection(
      1,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    )
  }

  selectAll()
  {
    if(this.selection.kp)
    {
      this.selection.kp = false;
      this.selection.kpv = false;
      this.selection.lf = false;
      this.selection.lfe = false;
      this.selection.cl = false;
      this.selection.cls = false;
      this.selection.cvm = false;
      this.selection.chm = false;
      this.selection.kpe = false;
      this.selection.kpev = false;
      this.selection.vl = false;
      this.selection.vls = false;
      this.selection.lc = false;
      this.selection.cld = false;
    }
    else
    {
      this.selection.kp = true;
      this.selection.kpv = true;
      this.selection.lf = true;
      this.selection.lfe = true;
      this.selection.cl = true;
      this.selection.cls = true;
      this.selection.cvm = true;
      this.selection.chm = true;
      this.selection.kpe = true;
      this.selection.kpev = true;
      this.selection.vl = true;
      this.selection.vls = true;
      this.selection.lc = true;
      this.selection.cld = true;
    }

  }
}

export class Selection {
  constructor(public id: number,
              public q: string,
              public h: string,
              public frequency: string,
              public pole:string,
              public motorSpeed:string,
              public material:string,
              public liquid:string,
              public kp:boolean,
              public kpv:boolean,
              public lf:boolean,
              public lfe:boolean,
              public cl:boolean,
              public cls:boolean,
              public cvm:boolean,
              public chm:boolean,
              public kpe:boolean,
              public kpev:boolean,
              public vl:boolean,
              public vls:boolean,
              public lc:boolean,
              public cld:boolean) { }
}

