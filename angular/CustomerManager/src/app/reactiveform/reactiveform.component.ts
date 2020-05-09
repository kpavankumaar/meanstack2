import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupName, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

function validatePhoneNumber() {
  return function (control: AbstractControl): {[key: string]: boolean} | null {
    const length = control.value.length;
    if ( length === 10){
      return null;
    }else{
      return {
        range: true
      };
    }
  };
}

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  formModelForTemplate: FormGroup;
  constructor() { }
  prop = true;
  countryList = ['USA', 'Russia', 'china', 'India'];
  ngOnInit(): void {
    this.formModelForTemplate = new FormGroup({
      firstName : new FormControl('', [ Validators.required, Validators.minLength(3)]),
      phone: new FormControl('', [Validators.pattern('^[0-9]{10}$'), validatePhoneNumber()] ),
      email: new FormControl(''),
      validation: new FormControl(''),
      address: new FormGroup( {
        hno: new FormControl('', Validators.required),
        locality: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl('')
      })
    });
  }
  ngDoCheck() {
    console.log(this.formModelForTemplate.get('validation').value);
  }
  chooseValidation(){
    const radioChoice = this.formModelForTemplate.get('validation').value;
    if (radioChoice === 'phoneValid'){
      this.formModelForTemplate.get('phone').setValidators([Validators.required]);
      this.formModelForTemplate.get('email').clearValidators();
    }else{
      this.formModelForTemplate.get('email').setValidators([Validators.required]);
      this.formModelForTemplate.get('phone').clearValidators();
    }
    this.formModelForTemplate.get('phone').updateValueAndValidity();
    this.formModelForTemplate.get('email').updateValueAndValidity();
    //this.formModelForTemplate.updateValueAndValidity();
    
  }

  sendData(){
    console.log(this.formModelForTemplate.get('firstName'));
    console.log(this.formModelForTemplate.get('address.hno') );
    console.log('phone', this.formModelForTemplate.get('phone').errors?.range);
    console.log('email', this.formModelForTemplate.get('email').errors?.required);
  }

}
