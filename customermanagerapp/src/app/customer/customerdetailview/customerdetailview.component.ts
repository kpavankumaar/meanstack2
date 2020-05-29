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
    console.log(this.route);
    this.route.parent.params.subscribe((params: Params) => {
      const id = +params['id'];
      if (id){
        this.httpService.getCustomer(id).subscribe((customer) => {
          this.customer = customer;
          console.log(this.customer);
        });
      }
    });
    //
  }

}
