import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1/test1.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { CustDirectiveComponent } from './cust-directive-topics/cust-directive.component';
import { MyDirectiveDirective } from './myDirectives/my-directive.directive';
import { HoverEffect } from './myDirectives/hoverEffect.directive';
import { ButtonDirective } from './myDirectives/button.directive';
import { CustngifDirective } from './myDirectives/custngif.directive';
import { PipesComponent } from './pipes-Topic/pipes.component';
import { GreetPipe } from '../greet.pipe';
// import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    Test1Component,
    DirectiveComponent,
    CustDirectiveComponent,
    MyDirectiveDirective,
    HoverEffect,
    ButtonDirective,
    CustngifDirective,
    PipesComponent,
    GreetPipe,
    
   
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports:[
    Test1Component,
    DirectiveComponent,
    CustDirectiveComponent,
    MyDirectiveDirective,
    HoverEffect,
    ButtonDirective,
    CustngifDirective,
    PipesComponent
  ],
  // providers: [HttpClient],
})
export class TestModule { }
