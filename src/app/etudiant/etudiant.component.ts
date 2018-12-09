import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../model/etu';
import {EtudiantService} from '../services/etudiant.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './etudiant.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
   Etudiantliste: Etudiant[];
   click = false;
  selectedEtu: Etudiant;

  OnClick(): void {
    this.click = this.click === false;
    this.selectedEtu = null;
  }
  onSelect(etuSelect: Etudiant): void {
    if (this.selectedEtu === etuSelect) {
      this.selectedEtu = null;
    } else {
      this.selectedEtu = etuSelect;
    }
    this.click = false;
  }
  delete(etu: Etudiant): void {
    this.Etudiantliste = this.Etudiantliste.filter(h => h !== etu);
    this.etudiantService.deleteEns(etu).subscribe();

  }
  getEtudiant(): void {
    this.etudiantService.getEnseignantapi().subscribe((response) => {
        this.Etudiantliste = response;
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
  constructor(private etudiantService: EtudiantService) { }

  ngOnInit() {
    this.getEtudiant();
  }

}
