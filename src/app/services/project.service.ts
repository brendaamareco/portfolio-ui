import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstractService';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends AbstractService<Project>
{
  constructor(protected override httpClient: HttpClient) 
  {
    super(httpClient, "/projects");
  }
}
