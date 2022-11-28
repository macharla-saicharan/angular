import { Component, OnInit } from '@angular/core';



  let object1:object;
  object1 = {
   'color' : 'white',
   'background-color':'black'
  };
  let object2:object;
  object2 = {
   'color' : 'yellow',
   'background-color':'red'
  };

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  values:string=""
  
  display(inp:any){
    this.values = inp.value; // this is from the dom tree but not from the direct input element.
  }
  status:boolean=false;
  isValid:boolean=false;
  applyClass:boolean=false
  obj1:object = object1;
  obj2:object = object2;

  searchText:string = 'rakamma'
  searchVal(data:Event){
    // any of the below code is ok, this is typecasting.

    // console.log((<HTMLInputElement>data.target).value);
    console.log((data.target as HTMLInputElement).value );
    
    this.searchText = (<HTMLInputElement>data.target).value;
}
  // ********** Two Way Data Binding ************

  city = "rakamma";
  
  
  
  
  
 
}
