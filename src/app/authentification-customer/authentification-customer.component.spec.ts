import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationCustomerComponent } from './authentification-customer.component';

describe('AuthentificationCustomerComponent', () => {
  let component: AuthentificationCustomerComponent;
  let fixture: ComponentFixture<AuthentificationCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthentificationCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
