import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HardSkill } from 'src/app/models/hardSkill.interface';
import { HardSkillService } from 'src/app/services/hard-skill.service';

@Component({
  selector: 'app-hard-skill-delete-dialog',
  templateUrl: './hard-skill-delete-dialog.component.html',
  styleUrls: ['./hard-skill-delete-dialog.component.scss']
})
export class HardSkillDeleteDialogComponent 
{
  hardSkillName: string = "";

  constructor(private dialogRef: MatDialogRef<HardSkillDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) private hardSkill: HardSkill, private hardSkillService: HardSkillService)
  { this.hardSkillName = hardSkill.name; }

  deleteHardSkill(): void
  {
    this.hardSkillService
    .delete(this.hardSkill.id)
    .subscribe( () => {})

    this.dialogRef.close();
  }
}
