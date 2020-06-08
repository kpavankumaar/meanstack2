import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
              private  authService: AuthService,
              private router: Router
  ){

  }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  submit(value){
      this.authService.login(value).subscribe((status: boolean) => {
        if (status){
          // if()
        }
      });
  }

}
