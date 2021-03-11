import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySponsoersComponent } from './my-sponsoers.component';

describe('MySponsoersComponent', () => {
  let component: MySponsoersComponent;
  let fixture: ComponentFixture<MySponsoersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySponsoersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySponsoersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
