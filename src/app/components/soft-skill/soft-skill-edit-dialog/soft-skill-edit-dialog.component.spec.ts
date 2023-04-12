import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillEditDialogComponent } from './soft-skill-edit-dialog.component';

describe('SoftSkillEditDialogComponent', () => {
  let component: SoftSkillEditDialogComponent;
  let fixture: ComponentFixture<SoftSkillEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftSkillEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftSkillEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
