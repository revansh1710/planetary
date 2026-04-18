import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryModal } from './story-modal';

describe('StoryModal', () => {
  let component: StoryModal;
  let fixture: ComponentFixture<StoryModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
