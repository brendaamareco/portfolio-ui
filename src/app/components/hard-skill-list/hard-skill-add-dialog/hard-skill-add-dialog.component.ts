import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  loading: boolean = false;

  constructor(private dialogRef: MatDialogRef<HardSkillAddDialogComponent>,  private hardSkillService: HardSkillService) 
  {
    this.addHardSkillForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required, Validators.maxLength(45)]),
        level: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)])
      });
  }

  get name(): FormControl
  { return this.addHardSkillForm.get('name') as FormControl; }

  get level(): FormControl
  { return this.addHardSkillForm.get('level') as FormControl; }

  submit(): void
  {
    this.loading = true;

    const hardSkillToAdd = {
      name: this.name.value,
      level: this.level.value
    };

    this.hardSkillService
    .add(hardSkillToAdd)
    .subscribe( () => 
    {
      this.loading = false;
      this.dialogRef.close();
    } )
  }
}
