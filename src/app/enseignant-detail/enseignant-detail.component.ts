import { Component, OnInit, Input } from '@angular/core';
import { Enseignant } from '../model/ens';
import {EnseignantService} from '../services/enseignant.service';
import {EnseignantComponent} from '../enseignant/enseignant.component';

@Component({
  selector: 'app-enseignant-detail',
  templateUrl: './enseignant-detail.component.html',
  styleUrls: ['./enseignant-detail.component.scss']
})
export class EnseignantDetailComponent implements OnInit {
  @Input() ens: Enseignant;

  delete(): void {
    this.enseignantComponents.delete(this.ens);
  }
  save(): void {
    this.enseignantService.updateEns(this.ens)
      .subscribe();
    this.enseignantComponents.onSelect(this.ens);
  }
  constructor(private enseignantService: EnseignantService, private enseignantComponents: EnseignantComponent) {
  }
  ngOnInit() {
  }

}
