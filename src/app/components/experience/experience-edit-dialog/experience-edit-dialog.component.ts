import { Component, Inject, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Experience } from 'src/app/models/experience.interface';
import { ExperienceService } from 'src/app/services/experience.service';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
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
  selector: 'app-experience-edit-dialog',
  templateUrl: './experience-edit-dialog.component.html',
  styleUrls: ['./experience-edit-dialog.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ExperienceEditDialogComponent 
{
  editExperienceForm: FormGroup = new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<ExperienceEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private experience: Experience,
    private experienceService: ExperienceService,
    private formBuilder: FormBuilder
  ) {
    this.editExperienceForm = formBuilder.group(
      {
        title: [
          this.experience.title,
          Validators.compose([Validators.required, Validators.maxLength(64)]),
        ],
        description: [this.experience.description, Validators.maxLength(1024)],
        thumbnail: [this.experience.thumbnail, Validators.maxLength(2048)],
        startDate: [this.experience.dateRange.startDate, Validators.required],
        endDate: [this.experience.dateRange.endDate, Validators.required],
        companyName: [
          this.experience.companyName,
          Validators.compose([Validators.required, Validators.maxLength(64)]),
        ],
      },
      { validator: startDateBeforeEndDateValidator() }
    );
  }

  submit(): void {
    this.experienceService
      .update({
        id: this.experience.id,
        title: this.title.value,
        description: this.description.value,
        thumbnail: this.thumbnail.value,
        dateRange: {
          startDate: this.startDate.value,
          endDate: this.endDate.value,
        },
        companyName: this.companyName.value,
      })
      .subscribe(() => {});

    this.dialogRef.close();
  }

  setMonthAndYear(
    normalizedMonthAndYear: Moment,
    datepicker: MatDatepicker<Moment>,
    formControl: FormControl
  ) {
    const ctrlValue = moment(formControl.value, 'YYYY-MM-DD');
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());

    formControl.setValue(ctrlValue);
    datepicker.close();
  }

  get title(): FormControl 
  { return this.editExperienceForm.get('title') as FormControl; }

  get description() 
  { return this.editExperienceForm.get('description') as FormControl; }

  get thumbnail() 
  { return this.editExperienceForm.get('thumbnail') as FormControl; }

  get startDate() 
  { return this.editExperienceForm.get('startDate') as FormControl; }

  get endDate() 
  { return this.editExperienceForm.get('endDate') as FormControl; }

  get companyName() 
  { return this.editExperienceForm.get('companyName') as FormControl; }
}
