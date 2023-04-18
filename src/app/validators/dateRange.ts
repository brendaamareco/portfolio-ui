import { ValidatorFn, AbstractControl } from "@angular/forms";
import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
const moment = _rollupMoment || _moment;

export function startDateBeforeEndDateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      
      const startDate = moment(control.get('startDate')?.value).format('YYYY-MM-DD');
      const endDate = moment(control.get('endDate')?.value).format('YYYY-MM-DD');

      if (startDate && endDate && startDate > endDate) {
        return { 'startDateBeforeEndDate': true };
      }
      return null;
    };
  }