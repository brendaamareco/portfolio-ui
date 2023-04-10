import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experience } from 'src/app/models/experience.interface';
import { ExperienceEditDialogComponent } from './experience-edit-dialog/experience-edit-dialog.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent 
{
  @Input() experience: Experience | undefined;
  @Output() experienceChanged: EventEmitter<void> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openEditDialog(): void
  {
    this.dialog
    .open(ExperienceEditDialogComponent, { data: this.experience })
    .afterClosed()
    .subscribe(() => { this.experienceChanged.emit(); });
  }
}
