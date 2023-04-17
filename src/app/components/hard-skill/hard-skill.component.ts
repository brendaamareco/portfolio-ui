import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HardSkill } from 'src/app/models/hardSkill.interface';

@Component({
  selector: 'app-hard-skill',
  templateUrl: './hard-skill.component.html',
  styleUrls: ['./hard-skill.component.scss']
})
export class HardSkillComponent 
{
  @Input() hardSkill: HardSkill | undefined;
  @Output() hardSkillChanged = new EventEmitter<void>();
}
