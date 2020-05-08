import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  dataBinding = 'Krishna';
  patternMsg = false;
  constructor() {

  }

  ngOnInit(): void {
  }
  methodToDetect(fname){
    console.log(fname.errors);
    this.patternMsg = fname.errors == null ? false : true;
  }

  templateFormDataBinding(data){
    // dirty-pristine, valid-invalid, touched-untouched
    console.log(data);
    console.log(data.controls.firstname.value);
    console.log(data.controls.lastname.value);
  }

}
