import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SoftSkill } from 'src/app/models/softSkill.interface';
import { SoftSkillEditDialogComponent } from './soft-skill-edit-dialog/soft-skill-edit-dialog.component';

@Component({
  selector: 'app-soft-skill',
  templateUrl: './soft-skill.component.html',
  styleUrls: ['./soft-skill.component.scss']
})
export class SoftSkillComponent 
{
  @Input() softSkill: SoftSkill | undefined;
  @Output() softSkillChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor(public dialog: MatDialog){}

  openEditDialog(): void
  {
    this.dialog
    .open(SoftSkillEditDialogComponent, 
      { data: this.softSkill })
      .afterClosed()
      .subscribe(() => {this.softSkillChanged.emit()});
  }
}
