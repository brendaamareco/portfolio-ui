import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.interface';
import { ProjectEditDialogComponent } from './project-edit-dialog/project-edit-dialog.component';
import { ProjectDeleteDialogComponent } from './project-delete-dialog/project-delete-dialog.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent 
{
  @Input() project: Project | undefined;
  @Output() projectEditedEvent = new EventEmitter<string>();

  constructor(public dialog: MatDialog, private authService: AuthService){}

  openEditDialog(): void
  {
    this.dialog
    .open(ProjectEditDialogComponent, { data: this.project })
    .afterClosed()
    .subscribe(() => this.projectEditedEvent.emit());
  }

  openDeleteDialog(): void
  {
    this.dialog
    .open(ProjectDeleteDialogComponent, { data: this.project })
    .afterClosed()
    .subscribe(() => this.projectEditedEvent.emit());
  }

  get isLogged(): boolean
  { return this.authService.loggedIn; }
}
