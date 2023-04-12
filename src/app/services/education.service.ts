import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education.interface';
import { AbstractService } from './abstractService';

@Injectable({
  providedIn: 'root'
})
export class EducationService extends AbstractService<Education> 
{
  constructor(protected override httpClient: HttpClient) 
  { 
    super(httpClient, "http://localhost:8080/api/education");
  }
}
