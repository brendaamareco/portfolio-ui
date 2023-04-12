import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.interface';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-delete-dialog',
  templateUrl: './project-delete-dialog.component.html',
  styleUrls: ['./project-delete-dialog.component.scss']
})
export class ProjectDeleteDialogComponent 
{
  projectTitle: string = "";

  constructor(public dialog: MatDialogRef<ProjectDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private project: Project, private projectService: ProjectService) 
    {
      this.projectTitle = project.title;
    }

  deleteProject(): void
  {
    this.projectService.delete(this.project.id).subscribe(data => {});
    this.dialog.close();
  }
}
