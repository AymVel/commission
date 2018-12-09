import {Component, Input, OnInit} from '@angular/core';
import {Etudiant} from '../model/etu';
import {EtudiantComponent} from '../etudiant/etudiant.component';
import {EtudiantService} from '../services/etudiant.service';

@Component({
  selector: 'app-etudiant-details',
  templateUrl: './etudiant-details.component.html',
  styleUrls: ['./etudiant-details.component.scss']
})
export class EtudiantDetailsComponent implements OnInit {
  @Input() etu: Etudiant;

  delete(): void {
    this.etudiantComponents.delete(this.etu);
  }
  save(): void {
    this.etudiantService.updateEtu(this.etu)
      .subscribe();
    this.etudiantComponents.onSelect(this.etu);
  }

  constructor(private etudiantService: EtudiantService, private etudiantComponents: EtudiantComponent) { }

  ngOnInit() {
  }

}
