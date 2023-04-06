import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Education } from 'src/app/models/education.interface';
import { EducationEditDialogComponent } from './education-edit-dialog/education-edit-dialog.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent 
{
  @Input() education: Education | undefined;
  @Output() educationEdited: EventEmitter<void> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openEditDialog(): void
  {
    this.dialog
    .open(EducationEditDialogComponent, { data: this.education })
    .afterClosed()
    .subscribe(() => { this.educationEdited.emit() });
  }
}
