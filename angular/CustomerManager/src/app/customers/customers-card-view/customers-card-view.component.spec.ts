import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersCardViewComponent } from './customers-card-view.component';

describe('CustomersCardViewComponent', () => {
  let component: CustomersCardViewComponent;
  let fixture: ComponentFixture<CustomersCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
