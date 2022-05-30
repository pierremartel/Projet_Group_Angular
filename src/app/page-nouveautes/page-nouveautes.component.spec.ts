import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouveautesComponent } from './page-nouveautes.component';

describe('PromottionComponent', () => {
  let component: PageNouveautesComponent;
  let fixture: ComponentFixture<PageNouveautesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNouveautesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNouveautesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
