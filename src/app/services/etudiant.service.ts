import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Etudiant} from '../model/etu';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private apiUrl = 'http://localhost/commission/public/etudiants';

  getEnseignantapi (): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.apiUrl);
  }
  updateEtu (etu: Etudiant): Observable<any> {
    const id = typeof etu === 'number' ? etu : etu.id;
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, etu);
  }
  addEtu (etu: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.apiUrl, etu);
  }
  deleteEns (etu: Etudiant | number): Observable<Etudiant> {
    const id = typeof etu === 'number' ? etu : etu.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Etudiant>(url);
  }
  constructor(private http: HttpClient) {


  }
}
