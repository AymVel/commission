import {Component, OnInit} from '@angular/core';
import {EnseignantService} from '../services/enseignant.service';
import { Enseignant } from '../model/ens';
import {EnseignantComponent} from '../enseignant/enseignant.component';

@Component({
  selector: 'app-enseignant-ajout',
  templateUrl: './enseignant-ajout.component.html',
  styleUrls: ['./enseignant-ajout.component.scss']
})


export class EnseignantAjoutComponent implements OnInit {
  constructor(private enseignantService: EnseignantService, private enseignantComponents: EnseignantComponent) {}
  add(nom_ens: string, prenom_ens: string, email: string ): void {
    nom_ens = nom_ens.trim();
    prenom_ens = prenom_ens.trim();
    email = email.trim();
    if (!nom_ens || !prenom_ens || !email) { return; }
    this.enseignantService.addEns({id: null, nom_ens, prenom_ens, email } as Enseignant)
      .subscribe((value) => {
        this.enseignantComponents.getEnseignant();
      });

  }
  ngOnInit() {
  }

}
