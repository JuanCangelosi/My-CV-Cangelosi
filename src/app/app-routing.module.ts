import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'about', component: AboutComponent },
      { path: 'skills', component: AbilitiesComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'contact', component: ContactMeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
