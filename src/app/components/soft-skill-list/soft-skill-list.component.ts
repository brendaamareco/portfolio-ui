import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SoftSkill } from 'src/app/models/softSkill.interface';
import { SoftSkillService } from 'src/app/services/soft-skill.service';
import { SoftSkillAddDialogComponent } from './soft-skill-add-dialog/soft-skill-add-dialog.component';

@Component({
  selector: 'app-soft-skill-list',
  templateUrl: './soft-skill-list.component.html',
  styleUrls: ['./soft-skill-list.component.scss']
})
export class SoftSkillListComponent {
  softSkillList: SoftSkill[] = [];
  
  constructor(private softSkillService: SoftSkillService, public dialog: MatDialog) 
  {
    this.loadSkills();
  }

  loadSkills(): void
  {
    this.softSkillService
    .getAll()
    .subscribe(skills => this.softSkillList = skills);
  }

  openAddDialog(): void
  {
    this.dialog
    .open(SoftSkillAddDialogComponent)
    .afterClosed()
    .subscribe(() => { this.loadSkills(); });
  }
}
