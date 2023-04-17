import { Injectable } from '@angular/core';
import { Language } from '../models/language.interface';
import { AbstractService } from './abstractService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService extends AbstractService<Language> {

  constructor(protected override httpClient: HttpClient) {
    super(httpClient, "http://localhost:8080/api/language");
  }
}
