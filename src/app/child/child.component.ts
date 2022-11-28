import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('This is from the child component...');
  }

  @Input() userName:string=''

  courses:any[] = [
    {'id': '1', 'name' : 'javascript'},
    {'id': '2', 'name' : 'typescript'},
    {'id': '3', 'name' : 'angular'}
  ];

  @Input() cName:string = '';
  show:boolean = true;

 @Output() custeve = new EventEmitter();


 registerEvent(name:string) {
  this.custeve.emit(name)
 }

 @Output() newEve = new EventEmitter();

 val:string = 'testing my communication skills'
 shareData() {
  this.newEve.emit(this.val);
 }

}
