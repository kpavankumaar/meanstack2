import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { observerable1$ } from 'src/app/basicdetail/basicdetail.component';
// import {  } from 'events';
function runData(){
  let data;
  observerable1$.subscribe((item) => {
    console.log(`this is from basic detail component ${item}`);
    data = item;
  });
  return data;
}

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  @Input() sampleItems: Array<any>;
  @Output() sendChangedDetails: EventEmitter<{}> = new EventEmitter();
  count = 1;
  constructor() { }

  ngOnInit(): void {
    console.log(this.sampleItems);
    console.log("data", runData());
  }
  sendDataToParent(){
    ++this.count;
    console.log(this.count);
    this.sendChangedDetails.emit(this.count);
  }
}
