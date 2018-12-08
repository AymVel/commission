import { Injectable } from '@angular/core';
import { Enseignant } from '../model/ens';

import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private apiUrl = 'http://localhost/commission/public/enseignants';

  getEnseignantapi (): Observable<Enseignant[]> {
  return this.http.get<Enseignant[]>(this.apiUrl);
      }
  updateEns (ens: Enseignant): Observable<any> {
    const id = typeof ens === 'number' ? ens : ens.id;
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, ens);
  }
  addEns (ens: Enseignant): Observable<Enseignant> {
    return this.http.post<Enseignant>(this.apiUrl, ens);
  }
  deleteEns (ens: Enseignant | number): Observable<Enseignant> {
    const id = typeof ens === 'number' ? ens : ens.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Enseignant>(url);
  }
  constructor(private http: HttpClient) {


  }
}
