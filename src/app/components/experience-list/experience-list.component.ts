import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experience } from 'src/app/models/experience.interface';
import { ExperienceService } from 'src/app/services/experience.service';
import { ExperienceAddDialogComponent } from './experience-add-dialog/experience-add-dialog.component';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent 
{
  experienceList: Experience[] = [];

  constructor(private experienceService: ExperienceService, public dialog: MatDialog) 
  { this.loadExperienceList(); }

  loadExperienceList(): void
  {
    this.experienceService
    .getAll()
    .subscribe( experienceList => { this.experienceList = experienceList });
  }

  openAddDialog(): void
  {
    this.dialog
    .open(ExperienceAddDialogComponent)
    .afterClosed()
    .subscribe( () => { this.loadExperienceList() });
  }
}
