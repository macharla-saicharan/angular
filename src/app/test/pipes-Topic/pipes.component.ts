import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'



@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor(private http:HttpClient) {  }

  users:any;
  ngOnInit() {
      this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (data) => {
        this.users = data
      }
    )
  }
  
  name:string = 'sai charan'
  curly = {
  'right' : '{{',
  'left' : '}}'
}
  num:number = 56;
  date =  new Date;
  userName = {
    'name' : 'suryaa',
    'gender' : 'm'
  }

}
