import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Education } from 'src/app/models/education.interface';
import { EducationService } from 'src/app/services/education.service';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';

import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-education-edit-dialog',
  templateUrl: './education-edit-dialog.component.html',
  styleUrls: ['./education-edit-dialog.component.scss'],
  providers: [ 
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ],
  encapsulation: ViewEncapsulation.None
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

  submit(): void
  {
    this.educationService.updateEducation(
      {
        id: this.education.id,
        institution: this.institution.value,
        title: this.title.value,
        description: this.description.value,
        thumbnail: this.thumbnail.value,
        startDate: this.startDate.value,
        endDate: this.endDate.value
      }).subscribe(() => {});

    this.dialogRef.close();
  }

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>, formControl: FormControl) 
  {
    const ctrlValue = formControl.value;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    formControl.setValue(ctrlValue);
    datepicker.close();
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
