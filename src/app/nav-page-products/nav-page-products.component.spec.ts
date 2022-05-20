import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPageProductsComponent } from './nav-page-products.component';

describe('NavPageProductsComponent', () => {
  let component: NavPageProductsComponent;
  let fixture: ComponentFixture<NavPageProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavPageProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
