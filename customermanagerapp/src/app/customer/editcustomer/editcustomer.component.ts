import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Service } from '../../core/service/service';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpService: Service) { }
  customer;
  ngOnInit(): void {
    console.log('this', this);
    this.route.parent.params.subscribe((params: Params) => {
      console.log(params);
      const id = +params['id'];
      if (id) {
        this.httpService.getCustomer(id).subscribe((customer) => {
          this.customer = customer;
          console.log(this.customer);
        });
      }
    });
  }
  submit(){

  }
}
