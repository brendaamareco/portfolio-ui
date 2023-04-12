import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from '../models/owner.interface';
import { AbstractService } from './abstractService';

@Injectable({
  providedIn: 'root'
})
export class OwnerService extends AbstractService<Owner>
{
  constructor(protected override httpClient: HttpClient) 
  {
    super(httpClient, "http://localhost:8080/api/owner");
  }
}
