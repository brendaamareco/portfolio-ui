import { Component } from '@angular/core';
import { Language } from 'src/app/models/language.interface';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent 
{
  languageList: Language[] = [];

  constructor(private languageService: LanguageService)
  {
    this.loadLanguageList();
  }

  loadLanguageList(): void
  {
    this.languageService
    .getAll()
    .subscribe( (languageList) => this.languageList = languageList );
  }
}
