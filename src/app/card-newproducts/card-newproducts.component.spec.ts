import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewproductsComponent } from './card-newproducts.component';

describe('CardNewproductsComponent', () => {
  let component: CardNewproductsComponent;
  let fixture: ComponentFixture<CardNewproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNewproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNewproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
