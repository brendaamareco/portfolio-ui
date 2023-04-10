import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Experience } from 'src/app/models/experience.interface';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience-delete-dialog',
  templateUrl: './experience-delete-dialog.component.html',
  styleUrls: ['./experience-delete-dialog.component.scss']
})
export class ExperienceDeleteDialogComponent 
{
  experienceDetails: String = "";

  constructor(public dialogRef: MatDialogRef<ExperienceDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) private experience: Experience, private experienceService: ExperienceService)
  {
    this.experienceDetails = `${experience.title} en ${experience.companyName}`;
  }

  deleteExperience(): void
  {
    this.experienceService
    .deleteExperience(this.experience?.id)
    .subscribe( () => {} );

    this.dialogRef.close();
  }
}
