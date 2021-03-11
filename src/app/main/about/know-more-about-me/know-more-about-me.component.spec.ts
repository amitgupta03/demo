import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMoreAboutMeComponent } from './know-more-about-me.component';

describe('KnowMoreAboutMeComponent', () => {
  let component: KnowMoreAboutMeComponent;
  let fixture: ComponentFixture<KnowMoreAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowMoreAboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowMoreAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
