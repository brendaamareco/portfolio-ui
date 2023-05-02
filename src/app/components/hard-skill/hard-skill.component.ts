import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HardSkill } from 'src/app/models/hardSkill.interface';
import { HardSkillEditDialogComponent } from './hard-skill-edit-dialog/hard-skill-edit-dialog.component';
import { HardSkillDeleteDialogComponent } from './hard-skill-delete-dialog/hard-skill-delete-dialog.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-hard-skill',
  templateUrl: './hard-skill.component.html',
  styleUrls: ['./hard-skill.component.scss']
})
export class HardSkillComponent 
{
  @Input() hardSkill: HardSkill | undefined;
  @Output() hardSkillChanged = new EventEmitter<void>();

  constructor(public dialog: MatDialog, private authService: AuthService){}

  openEditDialog(): void
  { this.openDialog(HardSkillEditDialogComponent); }
  
  openDeleteDialog(): void
  { this.openDialog(HardSkillDeleteDialogComponent); }

  openDialog(component: any)
  {
    this.dialog
    .open(component, { data: this.hardSkill })
    .afterClosed()
    .subscribe(() => { this.hardSkillChanged.emit() });
  }

  get isLogged(): boolean
  { return this.authService.loggedIn; }
}
