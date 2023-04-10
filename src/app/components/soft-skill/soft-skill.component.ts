import { Component, Input } from '@angular/core';
import { SoftSkill } from 'src/app/models/softSkill.interface';

@Component({
  selector: 'app-soft-skill',
  templateUrl: './soft-skill.component.html',
  styleUrls: ['./soft-skill.component.scss']
})
export class SoftSkillComponent 
{
  @Input() softSkill: SoftSkill | undefined;
}
