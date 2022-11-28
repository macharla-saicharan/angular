import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[Custngif]'
})
export class CustngifDirective {

  constructor(private view:TemplateRef<any>, private container:ViewContainerRef) { }

  @Input() set Custngif(condition:boolean) {
    if(condition){
      this.container.createEmbeddedView(this.view)
    } else {
      this.container.clear();
    }
  }
}
