import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet'
})
export class GreetPipe implements PipeTransform {

  transform(value: any): unknown {
    if(value.gender === 'm'){
        return `Hello Mr.${value.name}`
    } else if(value.gender === 'f') {
      return `Hello Ms. ${value.name}`
    } else {
      return `Hello ${value.name}`
    };
  }

}
