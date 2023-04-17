import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HardSkillService } from 'src/app/services/hard-skill.service';

@Component({
  selector: 'app-hard-skill-add-dialog',
  templateUrl: './hard-skill-add-dialog.component.html',
  styleUrls: ['./hard-skill-add-dialog.component.scss']
})
export class HardSkillAddDialogComponent 
{
  addHardSkillForm: FormGroup = new FormGroup({});

  constructor(private dialogRef: MatDialogRef<HardSkillAddDialogComponent>, private formBuilder: FormBuilder, private hardSkillService: HardSkillService) 
  {
    this.addHardSkillForm = formBuilder.group(
      {
        name: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
        level: [0, Validators.compose([Validators.required, Validators.min(0), Validators.max(100)])]
      });
  }

  get name(): FormControl
  {
    return this.addHardSkillForm.get('name') as FormControl;
  }

  get level(): FormControl
  {
    return this.addHardSkillForm.get('level') as FormControl;
  }

  submit(): void
  {
    this.hardSkillService.add({
      name: this.name.value,
      level: this.level.value
    }).subscribe( () => this.dialogRef.close )
  }
}
