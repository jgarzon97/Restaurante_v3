import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  // La URL base del servidor Express
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Obtener todas las mesas
  getMesas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/mesas`);
  }

  // Obtener las mesas disponibles
  getMesaEstado(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/mesasDisponible`);
  }

  // Actualiza los detalle de la mesa
  updateMesa(id: number, mesaData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/mesa/${id}`, mesaData);
  }

  // Elimina una mesa
  deleteMesa(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/mesa/${id}`);
  }
}
