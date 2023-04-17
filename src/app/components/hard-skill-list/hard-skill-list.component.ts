import { Component } from '@angular/core';
import { HardSkill } from 'src/app/models/hardSkill.interface';
import { HardSkillService } from 'src/app/services/hard-skill.service';

@Component({
  selector: 'app-hard-skill-list',
  templateUrl: './hard-skill-list.component.html',
  styleUrls: ['./hard-skill-list.component.scss']
})
export class HardSkillListComponent 
{
  hardSkills: HardSkill[] = [];

  constructor(private hardSkillService: HardSkillService) 
  {
    this.loadHardSkills();
  }

  loadHardSkills(): void
  {
    this.hardSkillService
    .getAll()
    .subscribe( (hardSkills) => this.hardSkills = hardSkills )
  }
}
