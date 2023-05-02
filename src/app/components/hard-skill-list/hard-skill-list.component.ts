import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HardSkill } from 'src/app/models/hardSkill.interface';
import { HardSkillService } from 'src/app/services/hard-skill.service';
import { HardSkillAddDialogComponent } from './hard-skill-add-dialog/hard-skill-add-dialog.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-hard-skill-list',
  templateUrl: './hard-skill-list.component.html',
  styleUrls: ['./hard-skill-list.component.scss']
})
export class HardSkillListComponent 
{
  hardSkills: HardSkill[] = [];

  constructor(private hardSkillService: HardSkillService, private dialog: MatDialog, private authService: AuthService) 
  { this.loadHardSkills(); }

  loadHardSkills(): void
  {
    this.hardSkillService
    .getAll()
    .subscribe( (hardSkills) => this.hardSkills = hardSkills )
  }

  openAddDialog(): void
  {
    this.dialog
    .open(HardSkillAddDialogComponent)
    .afterClosed()
    .subscribe( () => this.loadHardSkills());
  }

  get isLogged(): boolean
  { return this.authService.loggedIn; }
}
