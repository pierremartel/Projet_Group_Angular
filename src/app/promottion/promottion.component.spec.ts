import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromottionComponent } from './promottion.component';

describe('PromottionComponent', () => {
  let component: PromottionComponent;
  let fixture: ComponentFixture<PromottionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromottionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromottionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
