import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customerscardview',
  templateUrl: './customerscardview.component.html',
  styleUrls: ['./customerscardview.component.css']
})
export class CustomerscardviewComponent implements OnInit {

  constructor() { }
  @Input() customers;
  customersData;
  ngOnInit(): void {
    this.customersData = this.customers;
  }

}
