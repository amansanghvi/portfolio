import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about-me', component: AboutMeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AboutMeComponent,
    FooterComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
