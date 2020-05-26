import { Component, OnInit, Input, OnChanges, DoCheck, ViewChild, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { SampleService } from '../sample.service';
import { DataService } from '../core/service';
import { BasicdetailComponent } from '../basicdetail/basicdetail.component';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements DoCheck, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  constructor(public sample: SampleService, public data: DataService) {
    sample.data.push(4);
    console.log('simple Component constructor');
  }
  prop;
  @ViewChild(BasicdetailComponent) childBasicDetail: BasicdetailComponent;
  @Input() pData;
  ngAfterViewInit(){
    console.log('simple component anafterviewinit');

  }
  ngAfterViewChecked(){
    // this.prop = this.childBasicDetail.property;
    console.log('simple component anafterviewchecked');
  }
  ngAfterContentInit() {
    console.log('simple component ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('simple component ngAfterContentChecked');
    if (this.childBasicDetail){
      this.prop = this.childBasicDetail.property;
    }
    
  }
  // ngOnChanges(changes: SimpleChanges){
  //   console.log('simple component Onchange  ', changes);
  // }
  ngOnInit(): void {
    // this.sample.data.push(4);
    // console.log(' ngOnInit simple component', this.sample.data);
  }
  ngDoCheck(){
    // console.log('service data value ', this.data.countValue);
    // console.log(' ng Do check  simple component', this.sample.data);
  }
  dataFromChildComp(val){

  }
  
}
