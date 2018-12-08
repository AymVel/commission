import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../model/ens';
import { EnseignantService } from '../services/enseignant.service';
@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.scss']
})
export class EnseignantComponent implements OnInit {
  constructor(private enseignantService: EnseignantService) { }
  Ensliste: Enseignant[];
  selectedEns: Enseignant ;
  click = false;
  onSelect(ensSelect: Enseignant): void {
    if (this.selectedEns === ensSelect) {
      this.selectedEns = null;
    } else {
      this.selectedEns = ensSelect;
    }
  }
  OnClick(): void {
    this.click = this.click === false;
  }
  delete(ens: Enseignant): void {
    this.Ensliste = this.Ensliste.filter(h => h !== ens);
    this.enseignantService.deleteEns(ens).subscribe();

  }
  getEnseignant(): void {
    this.enseignantService.getEnseignantapi().subscribe((response) => {
        this.Ensliste = response;
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
  ngOnInit() {
    this.getEnseignant();
  }

}
