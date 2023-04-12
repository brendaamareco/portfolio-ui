import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SoftSkillService } from 'src/app/services/soft-skill.service';

@Component({
  selector: 'app-soft-skill-add-dialog',
  templateUrl: './soft-skill-add-dialog.component.html',
  styleUrls: ['./soft-skill-add-dialog.component.scss']
})
export class SoftSkillAddDialogComponent 
{
  addSoftSkillForm: FormGroup = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<SoftSkillAddDialogComponent>, private formBuilder: FormBuilder, private softSkillService: SoftSkillService)
  {
    this.addSoftSkillForm = this.formBuilder.group(
      {
        name: 
        ['', Validators.compose( [Validators.required, Validators.maxLength(45)] )]
      });
  }

  get name(): FormControl
  {
    return this.addSoftSkillForm.get('name') as FormControl;
  }

  submit(): void
  {
    this.softSkillService
    .add({name: this.name.value})
    .subscribe(() => {});

    this.dialogRef.close();
  }
}
