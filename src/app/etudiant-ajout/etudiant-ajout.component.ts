import { Component, OnInit } from '@angular/core';
import {Enseignant} from '../model/ens';
import {Etudiant} from '../model/etu';
import {EtudiantService} from '../services/etudiant.service';
import {EtudiantComponent} from '../etudiant/etudiant.component';

@Component({
  selector: 'app-etudiant-ajout',
  templateUrl: './etudiant-ajout.component.html',
  styleUrls: ['./etudiant-ajout.component.scss']
})
export class EtudiantAjoutComponent implements OnInit {
  add(nom_etu: string, prenom_etu: string, descriptif: string ): void {
    nom_etu = nom_etu.trim();
    prenom_etu = prenom_etu.trim();
    descriptif = descriptif.trim();
    if (!nom_etu || !prenom_etu || !descriptif) {
      return;
    }
    this.etudiantService.addEtu({id: null, nom_etu, prenom_etu, descriptif} as Etudiant)
      .subscribe((value) => {
        this.etudiantComponent.getEtudiant();
      });
  }

  constructor(private etudiantService: EtudiantService, private etudiantComponent: EtudiantComponent) { }

  ngOnInit() {
  }

}
