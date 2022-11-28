import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { EnrollCourse } from './Services concept/enroll.service';
// import { DirectiveComponent } from './test/directive/directive.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EnrollCourse]
})
export class AppComponent implements OnInit{

  constructor(private myService:EnrollCourse) { }

  ngOnInit(): void { }

  name:string = 'sai charan';
  name2:string = 'mohanbabu';
  courseName:string = '';
  success:string = ''
  registrationMsg(e:string) {
    this.success = e;
  }

  childVal:any ;

  cond:boolean = true;

  //  below props,methods used for services concept.
  
  courseList = this.myService.courses;
  
  tutorName:string = this.myService.tutor
  

  enroll(inp:string) {
    this.myService.enrollMessage(inp);
  }

}
