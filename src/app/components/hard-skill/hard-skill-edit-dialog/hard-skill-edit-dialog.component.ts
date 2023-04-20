import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HardSkill } from 'src/app/models/hardSkill.interface';
import { HardSkillService } from 'src/app/services/hard-skill.service';

@Component({
  selector: 'app-hard-skill-edit-dialog',
  templateUrl: './hard-skill-edit-dialog.component.html',
  styleUrls: ['./hard-skill-edit-dialog.component.scss']
})
export class HardSkillEditDialogComponent 
{
  editHardSkillForm: FormGroup = new FormGroup({});

  constructor(private dialogRef: MatDialogRef<HardSkillEditDialogComponent>, @Inject(MAT_DIALOG_DATA) private hardSkill: HardSkill, private hardSkillService: HardSkillService) 
  {
    this.editHardSkillForm = new FormGroup(
      {
        name: new FormControl(this.hardSkill.name, [Validators.required, Validators.maxLength(45)]),
        level: new FormControl(this.hardSkill.level, [Validators.required, Validators.min(0), Validators.max(100)])
      });
  }

  get name(): FormControl
  { return this.editHardSkillForm.get('name') as FormControl; }

  get level(): FormControl
  { return this.editHardSkillForm.get('level') as FormControl; }

  submit(): void
  {
    this.hardSkillService.update({
      id: this.hardSkill.id,
      name: this.name.value,
      level: this.level.value
    }).subscribe( () => {} )

    this.dialogRef.close();
  }
}
