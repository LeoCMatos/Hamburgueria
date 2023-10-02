import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  baseApiUrl = environment.baseApiUrl

  constructor (private http: HttpClient) { }

//pega todos os ingredientes
  getIngredientes(): Observable<any>{
    return this.http.get<any>(`${this.baseApiUrl}/ingredientes`)
  }
// pega um ingrediente
  getIngrediente(id: any): Observable<any>{
    return this.http.get<any>(`${this.baseApiUrl}/ingredientes/${id}`)
  }
// insere um novo ingrediente
  insertIngrediente(newIngrediente: any): Observable<any>{
    return this.http.post<any>(`${this.baseApiUrl}/ingredientes`, newIngrediente)
  }
// atualiza produto

  updateIngrediente(id: number, updateIngrediente: any): Observable<any>{
    return 	this.http.put(`${this.baseApiUrl}/ingredientes/${id}`,this.updateIngrediente);
  }
  

// deleta um novo ingrediente

  deleteIngrediente(id: string): Observable<any>{
    return   this.http.delete(`${this.baseApiUrl}/ingredientes/${id}`);
  }

}
