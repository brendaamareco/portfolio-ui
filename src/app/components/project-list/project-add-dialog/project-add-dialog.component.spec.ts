import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectAddDialogComponent } from './project-add-dialog.component';

describe('ProjectAddDialogComponent', () => {
  let component: ProjectAddDialogComponent;
  let fixture: ComponentFixture<ProjectAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
