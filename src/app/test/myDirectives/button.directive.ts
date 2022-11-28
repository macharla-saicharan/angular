import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {

  @Input('appButton') buttonColor:string = ''
  constructor(private element:ElementRef) {
   
   }
   @HostListener('click') clicking() {
     this.element.nativeElement.style.backgroundColor = this.buttonColor;
     this.element.nativeElement.style.color = 'yellow';
   }
}
