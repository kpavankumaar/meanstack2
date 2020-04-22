import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {  } from 'events';

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
  }
  sendDataToParent(){
    ++this.count;
    console.log(this.count);
    this.sendChangedDetails.emit(this.count);
  }
}
