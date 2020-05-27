import { Component, OnInit } from '@angular/core';
import { Service } from '../core/service/service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customersData;
  displayMode;
  displayModeEnum = DisplayModeEnum;
  constructor(private data: Service) { }

  ngOnInit(): void {
    this.displayMode = DisplayModeEnum.card;
    this.data.getCustomers().subscribe(res => {
      console.log(res);
      this.customersData = res;
    });
  }
  changeDisplay( mode: DisplayModeEnum){
    this.displayMode = mode;
    console.log(mode);
  }
}
enum DisplayModeEnum {
  card = 0,
  grid = 1,
  map = 2
}
