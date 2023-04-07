import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/models/experience.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent 
{
  @Input() experience: Experience | undefined;
}
