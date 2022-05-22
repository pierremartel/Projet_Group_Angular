import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageProductsComponent } from './single-page-products.component';

describe('SinglePageProductsComponent', () => {
  let component: SinglePageProductsComponent;
  let fixture: ComponentFixture<SinglePageProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePageProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
