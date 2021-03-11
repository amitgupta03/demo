import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoersComponent } from './sponsoers.component';

describe('SponsoersComponent', () => {
  let component: SponsoersComponent;
  let fixture: ComponentFixture<SponsoersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsoersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsoersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
