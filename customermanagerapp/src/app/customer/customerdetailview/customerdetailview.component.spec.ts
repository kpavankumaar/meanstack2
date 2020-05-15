import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdetailviewComponent } from './customerdetailview.component';

describe('CustomerdetailviewComponent', () => {
  let component: CustomerdetailviewComponent;
  let fixture: ComponentFixture<CustomerdetailviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerdetailviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
