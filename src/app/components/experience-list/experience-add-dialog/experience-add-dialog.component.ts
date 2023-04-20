import { Component, ViewEncapsulation } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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

import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
import { startDateBeforeEndDateValidator } from 'src/app/validators/dateRange';
import { MY_FORMATS } from 'src/app/utils/date-utils';
import { MatDatepicker } from '@angular/material/datepicker';

const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-experience-add-dialog',
  templateUrl: './experience-add-dialog.component.html',
  styleUrls: ['./experience-add-dialog.component.scss'],
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
export class ExperienceAddDialogComponent 
{
  addExperienceForm: FormGroup = new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<ExperienceAddDialogComponent>,
    private experienceService: ExperienceService) 
  {
    this.addExperienceForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(64)]),
      description: new FormControl('', Validators.maxLength(1024)),
      thumbnail: new FormControl('', Validators.maxLength(2048)),
      startDate: new FormControl(moment(), Validators.required),
      endDate: new FormControl(moment(), Validators.required),
      companyName: new FormControl('', [Validators.required, Validators.maxLength(64)])
    }, startDateBeforeEndDateValidator());
  }

  submit(): void 
  {
    const experienceToAdd = 
    {
      title: this.title.value,
      description: this.description.value,
      thumbnail: this.thumbnail.value,
      dateRange: 
      {
        startDate: this.startDate.value,
        endDate: this.endDate.value,
      },
      companyName: this.companyName.value,
    };

    this.experienceService
      .add(experienceToAdd)
      .subscribe(() => {});

    this.dialogRef.close();
  }

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>, formControl: FormControl)
{
    const ctrlValue = moment(formControl.value, 'YYYY-MM-DD');
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());

    formControl.setValue(ctrlValue);
    datepicker.close();
}

  get title() 
  { return this.addExperienceForm.get('title') as FormControl; }

  get description() 
  { return this.addExperienceForm.get('description') as FormControl; }

  get thumbnail() 
  { return this.addExperienceForm.get('thumbnail') as FormControl; }

  get startDate() 
  { return this.addExperienceForm.get('startDate') as FormControl; }

  get endDate() 
  { return this.addExperienceForm.get('endDate') as FormControl; }

  get companyName() 
  { return this.addExperienceForm.get('companyName') as FormControl; }
}
