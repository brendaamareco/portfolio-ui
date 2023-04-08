import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ExperienceService } from 'src/app/services/experience.service';
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
  selector: 'app-experience-add-dialog',
  templateUrl: './experience-add-dialog.component.html',
  styleUrls: ['./experience-add-dialog.component.scss'],
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
export class ExperienceAddDialogComponent 
{

  addExperienceForm: FormGroup = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<ExperienceAddDialogComponent>,
    private experienceService: ExperienceService, private formBuilder: FormBuilder) 
    {
      this.addExperienceForm = formBuilder.group(
        {
          title: ['', Validators.required],
          description: [''],
          thumbnail: [''],
          startDate: [moment(), Validators.required],
          endDate: [moment(), Validators.required],
          companyName: ['', Validators.required],
        });
    }

    submit(): void
    {
      this.experienceService
      .addExperience(
        {
          title: this.title.value,
          description: this.description.value,
          thumbnail: this.thumbnail.value,
          startDate: this.startDate.value,
          endDate: this.endDate.value,
          companyName: this.companyName.value
        })
      .subscribe( () => {});

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

    get title()
    {
      return this.addExperienceForm.get('title') as FormControl;
    }

    get description()
    {
      return this.addExperienceForm.get('description') as FormControl;
    }

    get thumbnail()
    {
      return this.addExperienceForm.get('thumbnail') as FormControl;
    }

    get startDate()
    {
      return this.addExperienceForm.get('startDate') as FormControl;
    }

    get endDate()
    {
      return this.addExperienceForm.get('endDate') as FormControl;
    }

    get companyName()
    {
      return this.addExperienceForm.get('companyName') as FormControl;
    }
}
