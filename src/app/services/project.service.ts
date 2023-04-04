import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("http://localhost:8080/api/projects");
  }

  addProject(project: Project): Observable<Project>
  {
    return this.httpClient.post<Project>("http://localhost:8080/api/projects", project);
  }

  updateProject(project: Project): Observable<Project>
  {
    return this.httpClient.put<Project>("http://localhost:8080/api/projects", project);
  }

  deleteProject(projectId: number | undefined): Observable<Project>
  {
    return this.httpClient.delete<Project>(`http://localhost:8080/api/projects/${projectId}`);
  }
}
