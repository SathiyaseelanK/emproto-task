import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'emproto-global-table',
  templateUrl: './global-table.component.html',
  styleUrls: ['./global-table.component.scss']
})
export class GlobalTableComponent implements OnInit {
  @Input() tableData: any = []; 
  constructor() { }

  ngOnInit(): void {
  }

  numDifferentiation(value: number) {
    let val: any = Math.abs(value)
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + ' Cr';
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + ' Lac';
    }
    return val;
  }

}
