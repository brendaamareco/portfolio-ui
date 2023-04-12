import { Component } from '@angular/core';
import { SoftSkill } from 'src/app/models/softSkill.interface';
import { SoftSkillService } from 'src/app/services/soft-skill.service';

@Component({
  selector: 'app-soft-skill-list',
  templateUrl: './soft-skill-list.component.html',
  styleUrls: ['./soft-skill-list.component.scss']
})
export class SoftSkillListComponent {
  softSkillList: SoftSkill[] = [];
  
  constructor(private softSkillService: SoftSkillService) 
  {
    this.loadSkills();
  }

  loadSkills(): void
  {
    this.softSkillService
    .getAll()
    .subscribe(skills => this.softSkillList = skills);
  }
}
