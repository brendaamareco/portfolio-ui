import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDeleteDialogComponent } from './education-delete-dialog.component';

describe('EducationDeleteDialogComponent', () => {
  let component: EducationDeleteDialogComponent;
  let fixture: ComponentFixture<EducationDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
