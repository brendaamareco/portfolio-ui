import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.interface';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectEditDialogComponent } from './project-edit-dialog/project-edit-dialog.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit  
{
  projectList: Project[] = [];

  constructor(public projectService: ProjectService, public dialog: MatDialog) {}

  ngOnInit(): void 
  {
    this.projectService.getProjects().subscribe(
      projects => { this.projectList = projects }
    )
  }

  openEditDialog(): void 
  {
    this.dialog.open(ProjectEditDialogComponent);
  }

}
