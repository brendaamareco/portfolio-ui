import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.interface';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit  
{
  projectList: Project[] = [];

  constructor(public projectService: ProjectService) {}

  ngOnInit(): void 
  {
    this.projectService.getProjects().subscribe(
      projects => { this.projectList = projects }
    )
    
    console.table(this.projectList);
  }

}
