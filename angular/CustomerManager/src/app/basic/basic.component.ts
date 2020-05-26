import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { observerable1$ } from 'src/app/basicdetail/basicdetail.component';
import { DataService } from '../core/service';
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
export class BasicComponent implements OnInit, AfterViewInit {
  @Input() sampleItems: Array<any>;
  @Output() sendChangedDetails: EventEmitter<{}> = new EventEmitter();
  count = 1;
  constructor(private data: DataService) {
    console.log('basic component constructor');
  }

  ngOnInit(): void {
    console.log(this.sampleItems);
    console.log("data", runData());
  }

  ngDoCheck() {
    console.log(' ng Do check  basic component');
  }
  ngAfterViewInit(){
    ++this.data.countValue;
  }
  sendDataToParent(){
    ++this.count;
    console.log(this.count);
    this.sendChangedDetails.emit(this.count);
    ++this.data.countValue;
    // let stringArray // 1000 string;
    // stringArray.map(str => str.toUpperCase())
    // .filter(/^[A-Z]+$/)
    // .forEach(str => console.log(str));

    // stringObservable$.map(str => str.toUpperCase())
    // .filter(/^[A-Z]+$/)
    // .subscribe(str => console.log(str));
  }

}
