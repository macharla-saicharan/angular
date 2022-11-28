import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent implements OnInit {

  constructor() { 
   
  }

  ngOnInit(): void {
  }

  students: any[] = [
    {name: 'Mark Vought', course: 'MBA', marks: 520, DOB: new Date('11-12-1997'), gender: 'Male'},
    {name: 'Steve Smith', course: 'BTECH', marks: 420, DOB: new Date('10-06-1998'), gender: 'Male'},
    {name: 'Merry Jane', course: 'MBA', marks: 540, DOB: new Date('09-22-1996'), gender: 'Female'},
    {name: 'John Doe', course: 'BTECH', marks: 380, DOB: new Date('06-12-1995'), gender: 'Male'},
    {name: 'Sarah Smith', course: 'M.SC', marks: 430, DOB: new Date('12-21-1999'), gender: 'Female'},
    {name: 'Jonas Weber', course: 'M.SC', marks: 320, DOB: new Date('06-18-1997'), gender: 'Male'}
];

totalMarks: number = 600;

_filterText:string = '';

filteredStudents:any[] = this.students;

set filterText(val:string) {
  this._filterText = val;
  this.filteredStudents = this.getFilteredData(val);
}

get filterText(){
  return this._filterText;
}

getFilteredData(filterTerm:string) {
  if(this.students.length == 0 || this.filterText == '') {
    return this.students;
  } else {
    return this.students.filter((student) =>
    {
          return student.gender.toLowerCase() === filterTerm.toLowerCase();
    })
  }
}
}
