import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioPageComponent } from './components/pages/portfolio-page/portfolio-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PortfolioPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
