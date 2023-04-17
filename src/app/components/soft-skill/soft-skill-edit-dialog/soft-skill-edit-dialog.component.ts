import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SoftSkill } from 'src/app/models/softSkill.interface';
import { SoftSkillService } from 'src/app/services/soft-skill.service';

@Component({
  selector: 'app-soft-skill-edit-dialog',
  templateUrl: './soft-skill-edit-dialog.component.html',
  styleUrls: ['./soft-skill-edit-dialog.component.scss']
})
export class SoftSkillEditDialogComponent 
{
  editSoftSkillForm: FormGroup = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<SoftSkillEditDialogComponent>, @Inject(MAT_DIALOG_DATA) private softSkill: SoftSkill,
    private formBuilder: FormBuilder, private softSkillService: SoftSkillService)
  {
    this.editSoftSkillForm = this.formBuilder.group(
      {
        name: [this.softSkill.name, Validators.compose( [Validators.required, Validators.maxLength(45)] )]
      });
  }

  get name(): FormControl
  {
    return this.editSoftSkillForm.get('name') as FormControl;
  }

  submit(): void
  {
    this.softSkillService
    .update({id: this.softSkill.id , name: this.name.value})
    .subscribe(() => {});

    this.dialogRef.close();
  }
}
