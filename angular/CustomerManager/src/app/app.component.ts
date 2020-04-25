import { Component, Input, ElementRef, ViewChild, ViewChildren, QueryList, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { BasicComponent } from './basic/basic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.style.css']
})
export class AppComponent implements AfterViewInit{
  // @Input() userInfo: ElementRef;
  @ViewChild('user') userInfo: ElementRef;
  @ViewChildren(BasicComponent) basic: QueryList<any>;
  
  ngAfterViewInit(){
    console.log(this.basic.first);
  }
  elementColor = {
    color: '#000',
    width: '500px',
    margin: 'auto',
    'background-color': 'lightgrey'
  };
  items = ['item1', 'item2', 'item3'];
  basicDetails = [1,2,3,4,5,6];
  data = true;
  title = {
    project: 'CustomerManager',
    duration: '5days',
    prop: { color: 'lightblue'}
  };
  userInput = 'Radha';
  loadData(){
    console.log('collect data');
  }

  changeInputMethod(e){
    console.log(e);
    this.userInput = e;
    console.log(this.userInfo.nativeElement.value);
  }
  dataFromChildComp(data){
    console.log('data recieved form child', data);
  }
}
