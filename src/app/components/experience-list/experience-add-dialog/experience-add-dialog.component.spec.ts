import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAddDialogComponent } from './experience-add-dialog.component';

describe('ExperienceAddDialogComponent', () => {
  let component: ExperienceAddDialogComponent;
  let fixture: ComponentFixture<ExperienceAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
