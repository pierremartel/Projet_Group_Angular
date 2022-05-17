import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageCommentsComponent } from './landing-page-comments.component';

describe('LandingPageCommentsComponent', () => {
  let component: LandingPageCommentsComponent;
  let fixture: ComponentFixture<LandingPageCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
