import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { AuthInterceptor } from './interceptors/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortfolioModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
