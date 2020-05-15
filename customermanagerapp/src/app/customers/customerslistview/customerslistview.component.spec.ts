import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerslistviewComponent } from './customerslistview.component';

describe('CustomerslistviewComponent', () => {
  let component: CustomerslistviewComponent;
  let fixture: ComponentFixture<CustomerslistviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerslistviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerslistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
