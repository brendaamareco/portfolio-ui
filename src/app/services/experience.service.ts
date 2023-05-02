import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstractService';
import { Experience } from '../models/experience.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService extends AbstractService<Experience>
{
  constructor(protected override httpClient: HttpClient) 
  {
    super(httpClient, "/experience");
  }
}
