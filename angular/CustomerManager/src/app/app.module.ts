import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { SimpleComponent } from './simple/simple.component';
import { BasicdetailComponent } from './basicdetail/basicdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    SimpleComponent,
    BasicdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
