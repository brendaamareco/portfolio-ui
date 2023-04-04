import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDeleteDialogComponent } from './project-delete-dialog.component';

describe('ProjectDeleteDialogComponent', () => {
  let component: ProjectDeleteDialogComponent;
  let fixture: ComponentFixture<ProjectDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
