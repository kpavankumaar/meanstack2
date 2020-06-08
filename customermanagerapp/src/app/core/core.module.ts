import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './service/auth.service';
import { CanActivateGuard } from '../customer/can-activate.guard';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [AuthService],
  exports: [NavbarComponent]
})
export class CoreModule { }
