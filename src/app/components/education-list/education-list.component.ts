import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Education } from 'src/app/models/education.interface';
import { EducationService } from 'src/app/services/education.service';
import { EducationAddDialogComponent } from './education-add-dialog/education-add-dialog.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss']
})
export class EducationListComponent 
{
  educationList: Education[] = [];

  constructor(private educationService: EducationService, public dialog: MatDialog, private authService: AuthService) 
  {
    this.loadEducationList();
  }

  loadEducationList(): void
  {
    this.educationService
    .getAll()
    .subscribe( educationList => this.educationList = educationList);
  }

  openAddDialog(): void
  {
    this.dialog
    .open(EducationAddDialogComponent)
    .afterClosed()
    .subscribe( () => this.loadEducationList());
  }

  get isLogged(): boolean
  { return this.authService.loggedIn; }
}
