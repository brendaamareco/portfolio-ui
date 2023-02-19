import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioLayoutComponent } from 'src/app/components/portfolio-layout/portfolio-layout.component';
import { PortfolioPageComponent } from 'src/app/components/pages/portfolio-page/portfolio-page.component';

@NgModule({
  declarations: [
    NavComponent,
    PortfolioLayoutComponent,
    PortfolioPageComponent
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
    PortfolioPageComponent
  ]
})
export class PortfolioModule { }
