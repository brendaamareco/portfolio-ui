import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceEditDialogComponent } from './experience-edit-dialog.component';

describe('ExperienceEditDialogComponent', () => {
  let component: ExperienceEditDialogComponent;
  let fixture: ComponentFixture<ExperienceEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
