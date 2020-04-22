import { Component, Input, ElementRef, ViewChild, ViewChildren, QueryList, OnDestroy, OnInit } from '@angular/core';
import { BasicComponent } from './basic/basic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // @Input() userInfo: ElementRef;
  @ViewChild('user') userInfo: ElementRef;
  @ViewChildren(BasicComponent) basic: QueryList<any>;
  ngOnInit(){
    console.log(this.basic);
  }
  elementColor = {
    color: '#000',
    width: '500px',
    margin: 'auto',
    'background-color': 'lightgrey'
  };
  items = ['item1', 'item2', 'item3'];
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
