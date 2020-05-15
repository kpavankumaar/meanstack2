import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerscardviewComponent } from './customerscardview.component';

describe('CustomerscardviewComponent', () => {
  let component: CustomerscardviewComponent;
  let fixture: ComponentFixture<CustomerscardviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerscardviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerscardviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
