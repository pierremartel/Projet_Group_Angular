import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageProductsComponent } from './list-page-products.component';

describe('ListPageProductsComponent', () => {
  let component: ListPageProductsComponent;
  let fixture: ComponentFixture<ListPageProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPageProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
