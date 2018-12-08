import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnseignantComponent } from './enseignant/enseignant.component';

import { FormsModule } from '@angular/forms';
import { EnseignantDetailComponent } from './enseignant-detail/enseignant-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { EnseignantAjoutComponent } from './enseignant-ajout/enseignant-ajout.component';



@NgModule({
  declarations: [
    AppComponent,
    EnseignantComponent,
    EnseignantDetailComponent,
    DashboardComponent,
    EnseignantAjoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
