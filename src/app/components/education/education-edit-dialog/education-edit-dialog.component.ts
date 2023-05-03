import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Education } from 'src/app/models/education.interface';
import { EducationService } from 'src/app/services/education.service';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';

import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
import { startDateBeforeEndDateValidator } from 'src/app/validators/dateRange';

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
  loading: boolean = false;
  
  constructor(public dialogRef: MatDialogRef<EducationEditDialogComponent>,  @Inject(MAT_DIALOG_DATA) private education: Education, private educationService: EducationService)
  {
    this.educationEditForm = new FormGroup(
      {
        institution: new FormControl(this.education.institution, [Validators.required, Validators.maxLength(120)]),
        title: new FormControl(this.education.title, [Validators.required, Validators.maxLength(120)]),
        description: new FormControl(this.education.description, [Validators.maxLength(1024)]),
        thumbnail: new FormControl(this.education.thumbnail, [Validators.maxLength(2048)]),
        startDate: new FormControl(this.education.dateRange?.startDate,[ Validators.required]),
        endDate: new FormControl(this.education.dateRange?.endDate, [Validators.required])
      }, startDateBeforeEndDateValidator() );
  }

  submit(): void
  {
    this.loading = true;

    const educationToUpdate =
    {
      id: this.education.id,
      institution: this.institution.value,
      title: this.title.value,
      description: this.description.value,
      thumbnail: this.thumbnail.value,
      dateRange: { startDate: this.startDate.value, endDate: this.endDate.value }
    };
    
    this.educationService
    .update(educationToUpdate)
    .subscribe(() => 
    {
      this.loading = false;
      this.dialogRef.close();
    });
  }

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>, formControl: FormControl) 
  {
    const ctrlValue = moment(formControl.value, 'YYYY-MM-DD');
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());

    formControl.setValue(ctrlValue);
    datepicker.close();
  }

  get institution(): FormControl
  { return this.educationEditForm?.get('institution') as FormControl; }

  get title(): FormControl
  { return this.educationEditForm.get('title') as FormControl; }

  get description(): FormControl
  { return this.educationEditForm.get('description') as FormControl; }

  get thumbnail(): FormControl
  { return this.educationEditForm.get('thumbnail') as FormControl; }

  get startDate(): FormControl
  { return this.educationEditForm.get('startDate') as FormControl; }

  get endDate(): FormControl
  { return this.educationEditForm.get('endDate') as FormControl; }
}
