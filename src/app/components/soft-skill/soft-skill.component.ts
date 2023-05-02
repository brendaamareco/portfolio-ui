import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SoftSkill } from 'src/app/models/softSkill.interface';
import { SoftSkillEditDialogComponent } from './soft-skill-edit-dialog/soft-skill-edit-dialog.component';
import { SoftSkillDeleteDialogComponent } from './soft-skill-delete-dialog/soft-skill-delete-dialog.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-soft-skill',
  templateUrl: './soft-skill.component.html',
  styleUrls: ['./soft-skill.component.scss']
})
export class SoftSkillComponent 
{
  @Input() softSkill: SoftSkill | undefined;
  @Output() softSkillChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor(public dialog: MatDialog, private authService: AuthService){}

  openEditDialog(): void
  { this.openDialog(SoftSkillEditDialogComponent); }

  openDeleteDialog(): void
  { this.openDialog(SoftSkillDeleteDialogComponent); }

  openDialog(component: any): void
  {
    this.dialog
    .open(component, 
      { data: this.softSkill })
      .afterClosed()
      .subscribe(() => {this.softSkillChanged.emit()});
  }

  get isLogged(): boolean
  { return this.authService.loggedIn; }
}
