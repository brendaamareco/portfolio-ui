import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSkillDeleteDialogComponent } from './hard-skill-delete-dialog.component';

describe('HardSkillDeleteDialogComponent', () => {
  let component: HardSkillDeleteDialogComponent;
  let fixture: ComponentFixture<HardSkillDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSkillDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardSkillDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
