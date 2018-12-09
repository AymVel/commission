import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnseignantComponent} from './enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path: 'Enseignants', component: EnseignantComponent},
  {path: 'Etudiant', component: EtudiantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
