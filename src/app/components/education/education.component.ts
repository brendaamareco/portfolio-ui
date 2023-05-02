import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Education } from 'src/app/models/education.interface';
import { EducationEditDialogComponent } from './education-edit-dialog/education-edit-dialog.component';
import { EducationDeleteDialogComponent } from './education-delete-dialog/education-delete-dialog.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent 
{
  @Input() education: Education | undefined;
  @Output() educationEdited: EventEmitter<void> = new EventEmitter();

  constructor(public dialog: MatDialog, private authService: AuthService) {}

  openEditDialog(): void
  { this.openDialog(EducationEditDialogComponent); }

  openDeleteDialog(): void
  { this.openDialog(EducationDeleteDialogComponent); }

  openDialog(component: any): void
  {
    this.dialog
    .open(component, { data: this.education } )
    .afterClosed()
    .subscribe(() => { this.educationEdited.emit() });
  }

  get isLogged(): boolean
  {
    return this.authService.loggedIn;
  }
}
