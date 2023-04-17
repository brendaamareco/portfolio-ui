import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Language } from 'src/app/models/language.interface';
import { LanguageService } from 'src/app/services/language.service';
import { LanguageAddDialogComponent } from './language-add-dialog/language-add-dialog.component';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent 
{
  languageList: Language[] = [];

  constructor(private languageService: LanguageService, private dialog: MatDialog)
  {
    this.loadLanguageList();
  }

  loadLanguageList(): void
  {
    this.languageService
    .getAll()
    .subscribe( (languageList) => this.languageList = languageList );
  }

  openAddDialog(): void
  {
    this.dialog
    .open(LanguageAddDialogComponent)
    .afterClosed()
    .subscribe( () => this.loadLanguageList() );
  }
}
