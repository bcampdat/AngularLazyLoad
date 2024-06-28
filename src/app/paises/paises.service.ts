import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPais } from './pais.interface';

@Injectable()
export class PaisesService {
  constructor(private http: HttpClient) {}

  // uso de genericos <diamante>
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  getPaises(): Observable<IPais[]> {
    return this.http.get<IPais[]>('https://restcountries.com/v3.1/all');
  }

  getPais(pais: string): Observable<IPais[]> {
    return this.http.get<IPais[]>('https://restcountries.com/v3.1/name/' + pais + '?fullText=true');
  }
}