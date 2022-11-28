import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-directive',
  templateUrl: './cust-directive.component.html',
  styleUrls: ['./cust-directive.component.css']
})
export class CustDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color:string = ''
  condn:boolean = true;

}
