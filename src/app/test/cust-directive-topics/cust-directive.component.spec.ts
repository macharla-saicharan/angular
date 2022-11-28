import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustDirectiveComponent } from './cust-directive.component';

describe('CustDirectiveComponent', () => {
  let component: CustDirectiveComponent;
  let fixture: ComponentFixture<CustDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
