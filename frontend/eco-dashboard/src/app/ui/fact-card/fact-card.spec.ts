import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactCard } from './fact-card';

describe('FactCard', () => {
  let component: FactCard;
  let fixture: ComponentFixture<FactCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
