import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectclassComponent } from './subjectclass.component';

describe('SubjectclassComponent', () => {
  let component: SubjectclassComponent;
  let fixture: ComponentFixture<SubjectclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
