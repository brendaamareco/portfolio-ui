import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDeleteDialogComponent } from './experience-delete-dialog.component';

describe('ExperienceDeleteDialogComponent', () => {
  let component: ExperienceDeleteDialogComponent;
  let fixture: ComponentFixture<ExperienceDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
