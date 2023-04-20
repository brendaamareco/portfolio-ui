import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    private softSkillService: SoftSkillService)
  {
    this.editSoftSkillForm = new FormGroup(
      {
        name: new FormControl(this.softSkill.name, [Validators.required, Validators.maxLength(45)])
      });
  }

  get name(): FormControl
  { return this.editSoftSkillForm.get('name') as FormControl; }

  submit(): void
  {
    this.softSkillService
    .update({id: this.softSkill.id , name: this.name.value})
    .subscribe(() => {});

    this.dialogRef.close();
  }
}
