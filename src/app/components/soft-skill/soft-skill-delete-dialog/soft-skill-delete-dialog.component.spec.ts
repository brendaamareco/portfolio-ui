import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillDeleteDialogComponent } from './soft-skill-delete-dialog.component';

describe('SoftSkillDeleteDialogComponent', () => {
  let component: SoftSkillDeleteDialogComponent;
  let fixture: ComponentFixture<SoftSkillDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftSkillDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftSkillDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
