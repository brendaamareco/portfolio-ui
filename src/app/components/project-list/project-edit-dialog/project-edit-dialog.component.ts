import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
        thumbnail: ['']
      });
  }

  get title(): AbstractControl<any, any> | null
  {
    return this.projectForm.get('title');
  }

  submitProject():void { this.dialogRef.close(); }
}
