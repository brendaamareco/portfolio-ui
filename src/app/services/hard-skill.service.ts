import { Injectable } from '@angular/core';
import { AbstractService } from './abstractService';
import { HardSkill } from '../models/hardSkill.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HardSkillService extends AbstractService<HardSkill> 
{
  constructor(protected override httpClient: HttpClient) 
  {
    super(httpClient, "http://localhost:8080/api/hard-skills");
  }
}
