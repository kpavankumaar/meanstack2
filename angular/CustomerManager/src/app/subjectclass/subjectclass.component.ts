import { Component, OnInit } from '@angular/core';
import { Subject, Observable, ReplaySubject } from 'rxjs';
@Component({
  selector: 'app-subjectclass',
  templateUrl: './subjectclass.component.html',
  styleUrls: ['./subjectclass.component.css']
})
export class SubjectclassComponent implements OnInit {

  constructor() {
    const subject$ = new Subject();
    subject$.next(1);
    subject$.subscribe( n => {
      console.log('recieved value', n);
    });
    subject$.next(2);
    subject$.next(3);

    const rsubject$ = new ReplaySubject();
    rsubject$.next('z');
    rsubject$.next('a');
    rsubject$.subscribe( item => {
      console.log('replay subject value', item);
    });
    rsubject$.next('b');
    rsubject$.next('c');
  }

  ngOnInit(): void {
  }

}
