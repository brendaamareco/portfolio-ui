import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioPageComponent } from 'src/app/components/pages/portfolio-page/portfolio-page.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { EducationComponent } from 'src/app/components/education/education.component';
import { EducationListComponent } from '../../components/education-list/education-list.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HardSkillComponent } from '../../components/hard-skill/hard-skill.component';
import { HardSkillListComponent } from '../../components/hard-skill-list/hard-skill-list.component';
import { SoftSkillComponent } from '../../components/soft-skill/soft-skill.component';
import { SoftSkillListComponent } from '../../components/soft-skill-list/soft-skill-list.component';
import { ProjectComponent } from '../../components/project/project.component';
import { ProjectListComponent } from '../../components/project-list/project-list.component';

@NgModule({
  declarations: [
    NavComponent,
    PortfolioPageComponent,
    AboutComponent,
    EducationComponent,
    EducationListComponent,
    HeaderComponent,
    HardSkillComponent,
    HardSkillListComponent,
    SoftSkillComponent,
    SoftSkillListComponent,
    ProjectComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: []
})
export class PortfolioModule { }
