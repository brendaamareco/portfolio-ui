import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.interface';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-add-dialog',
  templateUrl: './project-add-dialog.component.html',
  styleUrls: ['./project-add-dialog.component.scss']
})
export class ProjectAddDialogComponent 
{
  projectForm: FormGroup = new FormGroup({});
  loading: boolean = false;

  constructor(private projectService: ProjectService, public dialogRef: MatDialogRef<ProjectAddDialogComponent>, private formBuilder: FormBuilder) 
  {
    this.projectForm = formBuilder.group(
      {
        title: ['', Validators.compose([Validators.required, Validators.maxLength(64)]) ],
        description: ['', Validators.maxLength(1024)],
        thumbnail: ['', Validators.maxLength(2048)],
        projectUrl: ['', Validators.maxLength(2048)]
      });
  }

  get title(): FormControl 
  { return this.projectForm.get("title") as FormControl; }

  get description(): FormControl 
  { return this.projectForm.get("description") as FormControl; }

  get thumbnail(): FormControl 
  { return this.projectForm.get("thumbnail") as FormControl; }

  get projectUrl(): FormControl 
  { return this.projectForm.get("projectUrl") as FormControl; }

  submitProject():void 
  { 
    this.loading = true;

    let project: Project = {
      title: this.projectForm.get('title')?.value,
      description: this.projectForm.get('description')?.value,
      thumbnail: this.projectForm.get('thumbnail')?.value,
      projectUrl: this.projectForm.get('projectUrl')?.value
    }

    this.projectService
    .add(project)
    .subscribe((project) => 
      {
        this.loading = false;
        this.dialogRef.close();
      });
  }
}
