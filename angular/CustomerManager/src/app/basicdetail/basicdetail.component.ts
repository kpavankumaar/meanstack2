import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleService } from '../sample.service';


export const observerable1$ = Observable.create((item) => {
  item.next('one');
  item.next('two');
  setTimeout(() => {
    item.next('three');
  }, 2000);
  //item.error('error');
  // item.complete('four');
  item.next('fifth');
});

@Component({
  selector: 'app-basicdetail',
  templateUrl: './basicdetail.component.html',
  styleUrls: ['./basicdetail.component.css'],
  providers: []
})
export class BasicdetailComponent implements OnInit {
  urlData;
  observable$;
  observer$;
  constructor(public sampleServ: SampleService) {
    this.observable$ = Observable.create((item) => {
      item.next('one');
      item.next('two');
      setTimeout(() => {
        item.next('three');
      }, 2000);
      //item.error('error');
      // item.complete('four');
      item.next('fifth');
    });
    this.observer$ = {
      next: (dataItem) => {console.log(dataItem); },
      error: (v) => { console.log(v); },
      complete: (val) => { console.log(val); }
    };
    const firstSubscription = this.observable$.subscribe((dataItem) => { console.log(dataItem); }, (v) => { console.log(v); }, (val) => { console.log(val); });
    setTimeout(() => {
      firstSubscription.unsubscribe();
    }, 1000);
    this.observable$.subscribe(this.observer$);
  }

  ngOnInit(): void {
    console.log('dependency Injection', this.sampleServ.data);
      setTimeout(() => {
        this.urlData = "";
      }, 3000);
  }

  getData(){
    console.log(this.urlData);
  }
}
