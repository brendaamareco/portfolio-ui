import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LanguageLevel } from 'src/app/models/language.interface';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language-add-dialog',
  templateUrl: './language-add-dialog.component.html',
  styleUrls: ['./language-add-dialog.component.scss']
})
export class LanguageAddDialogComponent 
{
  addLanguageForm: FormGroup = new FormGroup({});
  levels = Object.values(LanguageLevel).filter((v) => isNaN(Number(v)));
  loading: boolean = false;

  constructor(private dialogRef: MatDialogRef<LanguageAddDialogComponent>, private formBuilder: FormBuilder, private languageService: LanguageService)
  {
    this.addLanguageForm = formBuilder.group(
      {
        name: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
        level: [LanguageLevel.A1, Validators.compose([Validators.required])]
      }
    );
  }

  get name(): FormControl
  { return this.addLanguageForm.get('name') as FormControl; }

  get level(): FormControl
  { return this.addLanguageForm.get('level') as FormControl; }

  submit(): void
  {
    this.loading = true;

    this.languageService.add(
      {
        name: this.name.value,
        level: this.level.value
      }
    ).subscribe( () => 
    {
      this.loading = false;
      this.dialogRef.close();
    } );
  }
}
