import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Education } from 'src/app/models/education.interface';
import { EducationService } from 'src/app/services/education.service';
import { EducationAddDialogComponent } from './education-add-dialog/education-add-dialog.component';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss']
})
export class EducationListComponent 
{
  educationList: Education[] = [];

  constructor(private educationService: EducationService, public dialog: MatDialog) 
  {
    this.loadEducationList();
  }

  loadEducationList(): void
  {
    this.educationService
    .getEducationList()
    .subscribe( educationList => this.educationList = educationList);
  }

  openAddDialog(): void
  {
    this.dialog
    .open(EducationAddDialogComponent)
    .afterClosed()
    .subscribe( () => this.loadEducationList());
  }
}
