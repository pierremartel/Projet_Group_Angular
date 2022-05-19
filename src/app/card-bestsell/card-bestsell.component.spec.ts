import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBestsellComponent } from './card-bestsell.component';

describe('CardBestsellComponent', () => {
  let component: CardBestsellComponent;
  let fixture: ComponentFixture<CardBestsellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBestsellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBestsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
