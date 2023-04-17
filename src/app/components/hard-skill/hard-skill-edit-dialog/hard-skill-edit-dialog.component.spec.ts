import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSkillEditDialogComponent } from './hard-skill-edit-dialog.component';

describe('HardSkillEditDialogComponent', () => {
  let component: HardSkillEditDialogComponent;
  let fixture: ComponentFixture<HardSkillEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSkillEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardSkillEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
