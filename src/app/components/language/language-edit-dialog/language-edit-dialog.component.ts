import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Language, LanguageLevel } from 'src/app/models/language.interface';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language-edit-dialog',
  templateUrl: './language-edit-dialog.component.html',
  styleUrls: ['./language-edit-dialog.component.scss']
})
export class LanguageEditDialogComponent 
{
  editLanguageForm: FormGroup = new FormGroup({});
  levels = Object.values(LanguageLevel).filter((v) => isNaN(Number(v)));

  constructor(private dialogRef: MatDialogRef<LanguageEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private language: Language,
    private formBuilder: FormBuilder, private languageService: LanguageService)
  {
    this.editLanguageForm = formBuilder.group(
      {
        name: [this.language.name, Validators.compose([Validators.required, Validators.maxLength(45)])],
        level: [LanguageLevel[this.language.level], Validators.compose([Validators.required])]
      }
    );
  }

  get name(): FormControl
  { return this.editLanguageForm.get('name') as FormControl; }

  get level(): FormControl
  { return this.editLanguageForm.get('level') as FormControl; }

  submit(): void
  {
    this.languageService.update(
      {
        id: this.language.id,
        name: this.name.value,
        level: this.level.value
      }
    ).subscribe( () => {} );

    this.dialogRef.close();
  }
}
