import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationEditDialogComponent } from './education-edit-dialog.component';

describe('EducationEditDialogComponent', () => {
  let component: EducationEditDialogComponent;
  let fixture: ComponentFixture<EducationEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
