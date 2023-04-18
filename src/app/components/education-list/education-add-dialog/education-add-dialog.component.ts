import { Component, ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
  selector: 'app-education-add-dialog',
  templateUrl: './education-add-dialog.component.html',
  styleUrls: ['./education-add-dialog.component.scss'],
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
export class EducationAddDialogComponent 
{
  educationAddForm: FormGroup = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<EducationAddDialogComponent>, private formBuilder: FormBuilder, private educationService: EducationService) 
  {
    this.educationAddForm = formBuilder.group(
      {
        institution: ['', Validators.compose([Validators.required, Validators.maxLength(120)])],
        title: ['', Validators.compose([Validators.required, Validators.maxLength(120)])],
        description: ['', Validators.maxLength(1024)],
        thumbnail: ['', Validators.maxLength(2048)],
        startDate: [moment(), Validators.required],
        endDate: [moment(), Validators.required]
      }, { validator: startDateBeforeEndDateValidator() });
  }

  get institution()
  {
    return this.educationAddForm?.get('institution') as FormControl;
  }

  get title()
  {
    return this.educationAddForm.get('title') as FormControl;
  }

  get description()
  {
    return this.educationAddForm.get('description') as FormControl;
  }

  get thumbnail()
  {
    return this.educationAddForm.get('thumbnail') as FormControl;
  }

  get startDate()
  {
    return this.educationAddForm.get('startDate') as FormControl;
  }

  get endDate()
  {
    return this.educationAddForm.get('endDate') as FormControl;
  }

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>, formControl: FormControl) 
  {
    const ctrlValue = moment(formControl.value, 'YYYY-MM-DD');
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());

    formControl.setValue(ctrlValue);
    datepicker.close();
  }

  submit(): void
  {
    this.educationService.add(
      {
        institution: this.institution.value,
        title: this.title.value,
        description: this.description.value,
        thumbnail: this.thumbnail.value,
        dateRange: {
          startDate: this.startDate.value,
          endDate: this.endDate.value
        }
      }).subscribe((education) => {});

    this.dialogRef.close();
  }
}
