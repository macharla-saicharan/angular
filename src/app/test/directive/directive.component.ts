import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
searchText:string= ""
color:string = '';
value = ''
storeColor(data:any){
  this.color = data.target.value;

  }

  nums:number[] = [12,45,56,89];

  courses: any[] = [
    { id: 1, name: "TypeScript" },
    { id: 2, name: "Angular" },
    { id: 3, name: "Node JS" },
    { id: 4, name: "JavaScript" }
  ];
  age = '';
  adulthood(data:any){
    this.age = (<HTMLInputElement>data.target).value;
    console.log(this.age);
    
  }
  bgColor:string= 'pink'
  fontSize:string = '30px'
  inputBar:string = ''

  score:number = 1;

  books:any[] = [
    {name:'harry'},
    {name:'hamiet'},
    {name:'invisible man'},
    {name:'chanakya'},

  ]
}
