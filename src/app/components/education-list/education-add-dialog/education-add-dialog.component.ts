import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-add-dialog',
  templateUrl: './education-add-dialog.component.html',
  styleUrls: ['./education-add-dialog.component.scss']
})
export class EducationAddDialogComponent 
{
  educationAddForm: FormGroup = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<EducationAddDialogComponent>, private formBuilder: FormBuilder, private educationService: EducationService) 
  {
    this.educationAddForm = formBuilder.group({
      institution: ['', Validators.required],
      title: ['', Validators.required],
      description: [''],
      thumbnail: [''],
      startDate: [Date.now(), Validators.required],
      endDate: [Date.now(), Validators.required]
    })
  }

  get institution()
  {
    return this.educationAddForm.get('institution');
  }

  get title()
  {
    return this.educationAddForm.get('title');
  }

  get description()
  {
    return this.educationAddForm.get('description');
  }

  get thumbnail()
  {
    return this.educationAddForm.get('thumbnail');
  }

  get startDate()
  {
    return this.educationAddForm.get('startDate');
  }

  get endDate()
  {
    return this.educationAddForm.get('endDate');
  }

}
