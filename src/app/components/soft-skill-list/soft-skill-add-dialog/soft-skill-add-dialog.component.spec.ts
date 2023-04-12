import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillAddDialogComponent } from './soft-skill-add-dialog.component';

describe('SoftSkillAddDialogComponent', () => {
  let component: SoftSkillAddDialogComponent;
  let fixture: ComponentFixture<SoftSkillAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftSkillAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftSkillAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
