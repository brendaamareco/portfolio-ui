import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioPageComponent } from 'src/app/pages/portfolio-page/portfolio-page.component';
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
import { LanguageListComponent } from '../../components/language-list/language-list.component';
import { LanguageComponent } from '../../components/language/language.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ExperienceListComponent } from '../../components/experience-list/experience-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderEditDialogComponent } from 'src/app/components/header/header-edit-dialog/header-edit-dialog.component';
import { AboutEditDialogComponent } from '../../components/about/about-edit-dialog/about-edit-dialog.component';
import { ProjectAddDialogComponent } from '../../components/project-list/project-add-dialog/project-add-dialog.component';
import { ProjectEditDialogComponent } from '../../components/project/project-edit-dialog/project-edit-dialog.component';
import { ProjectDeleteDialogComponent } from '../../components/project/project-delete-dialog/project-delete-dialog.component';
import { EducationAddDialogComponent } from '../../components/education-list/education-add-dialog/education-add-dialog.component';
import { EducationEditDialogComponent } from '../../components/education/education-edit-dialog/education-edit-dialog.component';
import { EducationDeleteDialogComponent } from '../../components/education/education-delete-dialog/education-delete-dialog.component';
import { ExperienceAddDialogComponent } from '../../components/experience-list/experience-add-dialog/experience-add-dialog.component';
import { ExperienceEditDialogComponent } from 'src/app/components/experience/experience-edit-dialog/experience-edit-dialog.component';
import { ExperienceDeleteDialogComponent } from 'src/app/components/experience/experience-delete-dialog/experience-delete-dialog.component';
import { SoftSkillAddDialogComponent } from '../../components/soft-skill-list/soft-skill-add-dialog/soft-skill-add-dialog.component';
import { SoftSkillEditDialogComponent } from '../../components/soft-skill/soft-skill-edit-dialog/soft-skill-edit-dialog.component';
import { SoftSkillDeleteDialogComponent } from '../../components/soft-skill/soft-skill-delete-dialog/soft-skill-delete-dialog.component';
import { HardSkillAddDialogComponent } from '../../components/hard-skill-list/hard-skill-add-dialog/hard-skill-add-dialog.component';
import { HardSkillEditDialogComponent } from '../../components/hard-skill/hard-skill-edit-dialog/hard-skill-edit-dialog.component';
import { HardSkillDeleteDialogComponent } from '../../components/hard-skill/hard-skill-delete-dialog/hard-skill-delete-dialog.component';
import { LanguageAddDialogComponent } from '../../components/language-list/language-add-dialog/language-add-dialog.component';

@NgModule({
  declarations: [
    NavComponent,
    PortfolioPageComponent,
    AboutComponent,
    EducationComponent,
    EducationListComponent,
    HeaderComponent,
    HeaderEditDialogComponent,
    HardSkillComponent,
    HardSkillListComponent,
    SoftSkillComponent,
    SoftSkillListComponent,
    ProjectComponent,
    ProjectListComponent,
    LanguageListComponent,
    LanguageComponent,
    ExperienceComponent,
    ExperienceListComponent,
    AboutEditDialogComponent,
    ProjectAddDialogComponent,
    ProjectEditDialogComponent,
    ProjectDeleteDialogComponent,
    EducationAddDialogComponent,
    EducationEditDialogComponent,
    EducationDeleteDialogComponent,
    ExperienceAddDialogComponent,
    ExperienceEditDialogComponent,
    ExperienceDeleteDialogComponent,
    SoftSkillAddDialogComponent,
    SoftSkillEditDialogComponent,
    SoftSkillDeleteDialogComponent,
    HardSkillAddDialogComponent,
    HardSkillEditDialogComponent,
    HardSkillDeleteDialogComponent,
    LanguageAddDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: []
})
export class PortfolioModule { }
