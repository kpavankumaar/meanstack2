import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicdetailComponent } from './basicdetail.component';

describe('BasicdetailComponent', () => {
  let component: BasicdetailComponent;
  let fixture: ComponentFixture<BasicdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
