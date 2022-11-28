import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";


@Directive({
    selector:'[hoverEffect]'
})
export class HoverEffect implements OnInit {


    constructor(private element:ElementRef){

    }

    ngOnInit(): void {
        this.element.nativeElement.style.backgroundColor = 'Green';

    }
    
    @HostListener ('mouseenter') mouseIn(){
        this.element.nativeElement.style.backgroundColor = '#0dcaf0';
        this.element.nativeElement.style.padding = '30px';
        this.element.nativeElement.style.transition = '1s';
    }
    @HostListener ('mouseleave') mouseOut(){
        this.element.nativeElement.style.backgroundColor = 'green';
        this.element.nativeElement.style.padding = '10px';
        this.element.nativeElement.style.transition = '1s';
    }
}