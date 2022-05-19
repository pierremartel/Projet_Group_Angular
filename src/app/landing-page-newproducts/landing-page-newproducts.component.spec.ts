import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageNewproductsComponent } from './landing-page-newproducts.component';

describe('LandingPageNewproductsComponent', () => {
  let component: LandingPageNewproductsComponent;
  let fixture: ComponentFixture<LandingPageNewproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageNewproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageNewproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
