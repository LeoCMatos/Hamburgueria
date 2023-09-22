import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HamburguerService {
  baseApiUrl = environment.baseApiUrl
  
  constructor (private http: HttpClient) { }

  getBurguers(): Observable<any>{
    return this.http.get<any>(`${this.baseApiUrl}/hamburguer`)
  }

  getLanches(): Observable<any>{
    return this.http.get<any>(`${this.baseApiUrl}/hamburguer/lanches`)
  }

  getBebidas(): Observable<any>{
    return this.http.get<any>(`${this.baseApiUrl}/hamburguer/bebidas`)
  }

  getAcompanhamentos(): Observable<any>{
    return this.http.get<any>(`${this.baseApiUrl}/hamburguer/Acompanhamentos`)
  }


  getBurguer(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseApiUrl}/hamburguer/${id}`);
  }

  insertBurguer(newBurguer: any): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}/hamburguer`, newBurguer);
  }

  updateBurguer(id: number, updatedBurguer: any): Observable<any> {
    return this.http.put<any>(`${this.baseApiUrl}/hamburguer/${id}`, updatedBurguer);
  }

  excluirRegistro(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseApiUrl}/hamburguer/${id}`);
  }

}
