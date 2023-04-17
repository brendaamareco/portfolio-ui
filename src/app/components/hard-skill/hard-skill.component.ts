import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HardSkill } from 'src/app/models/hardSkill.interface';
import { HardSkillEditDialogComponent } from './hard-skill-edit-dialog/hard-skill-edit-dialog.component';

@Component({
  selector: 'app-hard-skill',
  templateUrl: './hard-skill.component.html',
  styleUrls: ['./hard-skill.component.scss']
})
export class HardSkillComponent 
{
  @Input() hardSkill: HardSkill | undefined;
  @Output() hardSkillChanged = new EventEmitter<void>();

  constructor(public dialog: MatDialog){}

  openEditDialog(): void
  {
    this.dialog
    .open(HardSkillEditDialogComponent, { data: this.hardSkill })
    .afterClosed()
    .subscribe(() => { this.hardSkillChanged.emit() });
  }
}
