import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageBestsellComponent } from './landing-page-bestsell.component';

describe('LandingPageBestsellComponent', () => {
  let component: LandingPageBestsellComponent;
  let fixture: ComponentFixture<LandingPageBestsellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageBestsellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageBestsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
