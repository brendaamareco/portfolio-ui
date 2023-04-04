import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.interface';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-edit-dialog',
  templateUrl: './project-edit-dialog.component.html',
  styleUrls: ['./project-edit-dialog.component.scss']
})
export class ProjectEditDialogComponent {

  projectEditForm: FormGroup = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<ProjectEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private project: Project, private formBuilder: FormBuilder, private projectService: ProjectService)
    {
      this.projectEditForm = formBuilder.group(
        {
          title: [this.project.title, Validators.compose([Validators.required, Validators.maxLength(32)])],
          description: [this.project.description],
          thumbnail: [this.project.thumbnail],
          projectUrl: [this.project.projectUrl]
        });
    }

    get title() { return this.projectEditForm.get("title"); }

    submitProject()
    {
      console.log("project submitted");
    }
}
