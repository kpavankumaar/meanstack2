import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersListViewComponent } from './customers-list-view.component';

describe('CustomersListViewComponent', () => {
  let component: CustomersListViewComponent;
  let fixture: ComponentFixture<CustomersListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
