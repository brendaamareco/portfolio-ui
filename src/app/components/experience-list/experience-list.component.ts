import { Component } from '@angular/core';
import { Experience } from 'src/app/models/experience.interface';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent 
{
  experienceList: Experience[] = [];

  constructor(private experienceService: ExperienceService) 
  {
    this.loadExperienceList();
  }

  loadExperienceList(): void
  {
    this.experienceService
    .getExperienceList()
    .subscribe( experienceList => { this.experienceList = experienceList });
  }
}
