import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Education } from 'src/app/models/education.interface';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-delete-dialog',
  templateUrl: './education-delete-dialog.component.html',
  styleUrls: ['./education-delete-dialog.component.scss']
})
export class EducationDeleteDialogComponent 
{
  educationDetails: string = "";
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<EducationDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) private education: Education, private educationService: EducationService)
  {
    this.educationDetails = `${this.education.title} en ${this.education.institution}`;
  }

  deleteEducation(): void
  {
    this.loading = true;

    this.educationService
    .delete(this.education.id)
    .subscribe( () => 
    {
      this.loading = false;
      this.dialogRef.close();
    });
  }
}
