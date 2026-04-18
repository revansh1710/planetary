import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityGrid } from './activity-grid';

describe('ActivityGrid', () => {
  let component: ActivityGrid;
  let fixture: ComponentFixture<ActivityGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
