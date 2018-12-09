import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnseignantComponent } from './enseignant/enseignant.component';

import { FormsModule } from '@angular/forms';
import { EnseignantDetailComponent } from './enseignant-detail/enseignant-detail.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

import { HttpClientModule } from '@angular/common/http';
import { EnseignantAjoutComponent } from './enseignant-ajout/enseignant-ajout.component';
import { EtudiantDetailsComponent } from './etudiant-details/etudiant-details.component';
import { EtudiantAjoutComponent } from './etudiant-ajout/etudiant-ajout.component';



@NgModule({
  declarations: [
    AppComponent,
    EnseignantComponent,
    EnseignantDetailComponent,
    EtudiantComponent,
    EnseignantAjoutComponent,
    EtudiantDetailsComponent,
    EtudiantAjoutComponent
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
