import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.interface';
import { ProjectEditDialogComponent } from './project-edit-dialog/project-edit-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent 
{
  @Input() project: Project | undefined;

  constructor(public dialog: MatDialog){}

  openEditDialog(): void
  {
    this.dialog.open(ProjectEditDialogComponent, { data: this.project });
  }
}
