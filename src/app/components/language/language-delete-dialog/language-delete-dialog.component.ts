import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Language } from 'src/app/models/language.interface';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language-delete-dialog',
  templateUrl: './language-delete-dialog.component.html',
  styleUrls: ['./language-delete-dialog.component.scss']
})
export class LanguageDeleteDialogComponent 
{
  languageName: string = "";

  constructor(private dialogRef: MatDialogRef<LanguageDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) private language: Language, private languageService: LanguageService)
  {
    this.languageName = language.name;
  }

  deleteLanguage(): void
  {
    this.languageService
    .delete(this.language.id)
    .subscribe( () => {} );

    this.dialogRef.close();
  }
}
