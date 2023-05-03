import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SoftSkill } from 'src/app/models/softSkill.interface';
import { SoftSkillService } from 'src/app/services/soft-skill.service';

@Component({
  selector: 'app-soft-skill-delete-dialog',
  templateUrl: './soft-skill-delete-dialog.component.html',
  styleUrls: ['./soft-skill-delete-dialog.component.scss']
})
export class SoftSkillDeleteDialogComponent 
{
  softSkill: SoftSkill | undefined;
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<SoftSkillDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) private dialogData: SoftSkill, private softSkillService: SoftSkillService)
  {
    this.softSkill = dialogData;
  }

  deleteSoftSkill(): void
  {
    this.loading = true;

    this.softSkillService
    .delete(this.softSkill?.id)
    .subscribe(() => 
    {
      this.loading = false;
      this.dialogRef.close();
    });
  }
}
