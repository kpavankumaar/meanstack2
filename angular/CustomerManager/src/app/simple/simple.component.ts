import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  constructor(public sample: SampleService) { 
    sample.data.push(4);
  }

  ngOnInit(): void {
    // this.sample.data.push(4);
    console.log('simple component dependency injection',this.sample.data);
  }

}
