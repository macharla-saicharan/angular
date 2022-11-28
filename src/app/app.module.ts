import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component'
import { TestModule } from './test/test.module';
import { FilteringComponent } from './filtering/filtering.component';
import { HttpClient } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { EnrollCourse } from './Services concept/enroll.service';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    FilteringComponent,
    ChildComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
