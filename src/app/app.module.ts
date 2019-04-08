import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { FormationComponent } from './formation/formation.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { LoaderComponent } from './loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { contactFormReducer } from './_reducers/contactFormReducer.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ContactInfoComponent,
    FormationComponent,
    AbilitiesComponent,
    PortfolioComponent,
    AboutComponent,
    HeaderComponent,
    ContactMeComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ contactForm: contactFormReducer }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
