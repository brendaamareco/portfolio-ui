import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioLayoutComponent } from 'src/app/components/portfolio-layout/portfolio-layout.component';

@NgModule({
  declarations: [
    NavComponent,
    PortfolioLayoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    NavComponent,
    PortfolioLayoutComponent
  ]
})
export class PortfolioModule { }
