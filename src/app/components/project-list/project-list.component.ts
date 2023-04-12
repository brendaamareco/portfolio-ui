import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.interface';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectAddDialogComponent } from './project-add-dialog/project-add-dialog.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent  
{
  projectList: Project[] = [];

  constructor(public projectService: ProjectService, public dialog: MatDialog) 
  {
    this.loadProjects();
  }

  openAddDialog(): void 
  {
    this.dialog.open(ProjectAddDialogComponent).afterClosed().subscribe(() => this.loadProjects());
  }

  loadProjects(): void
  {
    this.projectService.getAll().subscribe(
      projects => { this.projectList = projects }
    )
  }

}
