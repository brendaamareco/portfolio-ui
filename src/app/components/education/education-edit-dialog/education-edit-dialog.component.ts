import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import moment from 'moment';
import { Education } from 'src/app/models/education.interface';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-edit-dialog',
  templateUrl: './education-edit-dialog.component.html',
  styleUrls: ['./education-edit-dialog.component.scss']
})
export class EducationEditDialogComponent 
{
  educationEditForm: FormGroup = new FormGroup({});
  
  constructor(public dialogRef: MatDialogRef<EducationEditDialogComponent>,  @Inject(MAT_DIALOG_DATA) private education: Education, private educationService: EducationService, private formBuilder: FormBuilder)
  {
    this.educationEditForm = this.formBuilder.group(
      {
        institution: [this.education.institution, Validators.required],
        title: [this.education.title, Validators.required],
        description: [this.education.description],
        thumbnail: [this.education.thumbnail],
        startDate: [this.education.startDate, Validators.required],
        endDate: [this.education.endDate, Validators.required]
      });
  }

  get institution()
  {
    return this.educationEditForm?.get('institution') as FormControl;
  }

  get title()
  {
    return this.educationEditForm.get('title') as FormControl;
  }

  get description()
  {
    return this.educationEditForm.get('description') as FormControl;
  }

  get thumbnail()
  {
    return this.educationEditForm.get('thumbnail') as FormControl;
  }

  get startDate()
  {
    return this.educationEditForm.get('startDate') as FormControl;
  }

  get endDate()
  {
    return this.educationEditForm.get('endDate') as FormControl;
  }
}
