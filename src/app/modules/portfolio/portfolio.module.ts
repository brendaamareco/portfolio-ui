import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioLayoutComponent } from 'src/app/components/portfolio-layout/portfolio-layout.component';
import { PortfolioPageComponent } from 'src/app/components/pages/portfolio-page/portfolio-page.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { EducationComponent } from 'src/app/components/education/education.component';
import { EducationListComponent } from '../../components/education-list/education-list.component';

@NgModule({
  declarations: [
    NavComponent,
    PortfolioLayoutComponent,
    PortfolioPageComponent,
    AboutComponent,
    EducationComponent,
    EducationListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    NavComponent,
    PortfolioLayoutComponent,
    PortfolioPageComponent,
    AboutComponent,
    EducationComponent,
    EducationListComponent
  ]
})
export class PortfolioModule { }
