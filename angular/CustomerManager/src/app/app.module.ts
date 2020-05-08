import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { SimpleComponent } from './simple/simple.component';
import { BasicdetailComponent } from './basicdetail/basicdetail.component';
import { SubjectclassComponent } from './subjectclass/subjectclass.component';
import { SampleService } from './sample.service';
import { CustomersModule } from './customers/customers.module';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    SimpleComponent,
    BasicdetailComponent,
    SubjectclassComponent,
    TemplateformComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
