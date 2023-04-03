import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.interface';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-edit-dialog',
  templateUrl: './project-edit-dialog.component.html',
  styleUrls: ['./project-edit-dialog.component.scss']
})
export class ProjectEditDialogComponent {

  projectForm: FormGroup = new FormGroup({});

  constructor(private projectService: ProjectService, public dialogRef: MatDialogRef<ProjectEditDialogComponent>, private formBuilder: FormBuilder) 
  {
    this.projectForm = formBuilder.group(
      {
        title: ['', Validators.compose([Validators.required, Validators.maxLength(32)]) ],
        description: [''],
        thumbnail: [''],
        projectUrl: ['']
      });
  }

  get title(): AbstractControl<any, any> | null
  {
    return this.projectForm.get('title');
  }

  submitProject():void 
  { 
    let project: Project = {
      title: this.projectForm.get('title')?.value,
      description: this.projectForm.get('description')?.value,
      thumbnail: this.projectForm.get('thumbnail')?.value,
      projectUrl: this.projectForm.get('projectUrl')?.value
    }

    this.projectService.addProject(project).subscribe(project => {});
    this.dialogRef.close(); 
  }
}
