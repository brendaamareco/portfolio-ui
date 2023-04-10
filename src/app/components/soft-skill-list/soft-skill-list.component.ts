import { Component } from '@angular/core';
import { SoftSkillService } from 'src/app/services/soft-skill.service';

@Component({
  selector: 'app-soft-skill-list',
  templateUrl: './soft-skill-list.component.html',
  styleUrls: ['./soft-skill-list.component.scss']
})
export class SoftSkillListComponent {
  constructor(private softSkillService: SoftSkillService) {
    this.softSkillService.getSkills().subscribe(skills => console.log(skills));
  }
}
