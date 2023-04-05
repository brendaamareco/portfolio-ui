import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAddDialogComponent } from './education-add-dialog.component';

describe('EducationAddDialogComponent', () => {
  let component: EducationAddDialogComponent;
  let fixture: ComponentFixture<EducationAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
