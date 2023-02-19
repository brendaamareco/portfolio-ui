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
import { SkillListComponent } from '../../components/skill-list/skill-list.component';
import { SkillComponent } from '../../components/skill/skill.component';

@NgModule({
  declarations: [
    NavComponent,
    PortfolioPageComponent,
    AboutComponent,
    EducationComponent,
    EducationListComponent,
    HeaderComponent,
    SkillListComponent,
    SkillComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    NavComponent,
    PortfolioPageComponent,
    AboutComponent,
    EducationComponent,
    EducationListComponent,
    HeaderComponent,
    SkillListComponent,
    SkillComponent
  ]
})
export class PortfolioModule { }
