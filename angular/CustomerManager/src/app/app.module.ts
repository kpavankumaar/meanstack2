import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { SimpleComponent } from './simple/simple.component';
import { BasicdetailComponent } from './basicdetail/basicdetail.component';
import { SubjectclassComponent } from './subjectclass/subjectclass.component';
import { SampleService } from './sample.service';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    SimpleComponent,
    BasicdetailComponent,
    SubjectclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
