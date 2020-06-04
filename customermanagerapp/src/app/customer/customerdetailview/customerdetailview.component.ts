import { Component, OnInit } from '@angular/core';
import { Service } from '../../core/service/service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-customerdetailview',
  templateUrl: './customerdetailview.component.html',
  styleUrls: ['./customerdetailview.component.css']
})
export class CustomerdetailviewComponent implements OnInit {

  constructor(private route: ActivatedRoute , private httpService: Service) { }
  customer;
  ngOnInit(): void {
    console.log('this', this);
    this.route.parent.params.subscribe((params: Params) => {
      console.log(params);
      const id = +params['id'];
      if (id){
        this.httpService.getCustomer(id).subscribe((customer) => {
        
          this.customer = customer[0];
          // console.log('this', this);
          // this.shareData(customer);
          // console.log(this.customer);
        });
      }
    });
    //
  }
  shareData(cust){
    // this.customer = cust[0];
    // console.log('this', this, cust);
  }

}
