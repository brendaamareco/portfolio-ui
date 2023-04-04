import { Component } from '@angular/core';
import { Education } from 'src/app/models/education.interface';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss']
})
export class EducationListComponent 
{
  educationList: Education[] = [];

  constructor(private educationService: EducationService) 
  {
    this.loadEducationList();
  }

  loadEducationList(): void
  {
    this.educationService
    .getEducationList()
    .subscribe( educationList => this.educationList = educationList);
  }
}
