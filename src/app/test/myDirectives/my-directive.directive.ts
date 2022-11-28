import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[colorsChange]'
})
export class MyDirectiveDirective implements OnInit{

  private element:ElementRef;
  constructor(private inpData:ElementRef) { 
    this.element = inpData;

    // this.inpData.nativeElement.style.backgroundColor = 'pink'

  }


  // we can create new props directly inside the constructor itself as done above or we can create a ngOnInit()
  // in that method also we can create css styles for this custom Attr directive as done below.

  /*
    To create like this
      [1] --> create a private varible of type 'ElementRef' inside this class
      [2] --> store the instance parameter's data (inpData) inside this pvt variable.
      [3] --> use this pvt variable inside the ngOnInit() method as below. 
  */

  ngOnInit() {
    console.log(this.element);
    this.element.nativeElement.style.backgroundColor= 'red';
    this.element.nativeElement.style.color = 'yellow'
  }
}
