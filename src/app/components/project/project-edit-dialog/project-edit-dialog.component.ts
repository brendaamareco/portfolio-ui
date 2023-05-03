import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.interface';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-edit-dialog',
  templateUrl: './project-edit-dialog.component.html',
  styleUrls: ['./project-edit-dialog.component.scss']
})
export class ProjectEditDialogComponent 
{
  projectEditForm: FormGroup = new FormGroup({});
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<ProjectEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private project: Project, private formBuilder: FormBuilder, private projectService: ProjectService)
    {
      this.projectEditForm = formBuilder.group(
        {
          title: [this.project.title, Validators.compose([Validators.required, Validators.maxLength(64)])],
          description: [this.project.description, Validators.maxLength(1024)],
          thumbnail: [this.project.thumbnail, Validators.maxLength(2048)],
          projectUrl: [this.project.projectUrl, Validators.maxLength(2048)]
        });
    }

    get title(): FormControl 
    { return this.projectEditForm.get("title") as FormControl; }

    get description(): FormControl 
    { return this.projectEditForm.get("description") as FormControl; }

    get thumbnail(): FormControl 
    { return this.projectEditForm.get("thumbnail") as FormControl; }

    get projectUrl(): FormControl 
    { return this.projectEditForm.get("projectUrl") as FormControl; }    
    
    submitProject()
    {
      this.loading = true;

      this.projectService.update({
        id: this.project.id,
        title: this.title?.value,
        description: this.description?.value,
        thumbnail: this.thumbnail?.value,
        projectUrl: this.projectUrl?.value
      }).subscribe(project => 
        {
          this.loading = false;
          this.dialogRef.close();
        });
    }
}
