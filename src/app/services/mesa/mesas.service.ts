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
  getMesas(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(`${this.apiUrl}/mesas`);
  }

  getMesa(id: number): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(`${this.apiUrl}/mesa/${id}`);
  }

  // Obtener las mesas disponibles
  getMesaEstado(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(`${this.apiUrl}/mesasDisponible`);
  }

  // Crea una mesa
  createMesa(mesaData: []): Observable<Mesa> {
    return this.http.post<Mesa>(`${this.apiUrl}/mesa`, mesaData);
  }

  // Actualiza los detalle de la mesa
  updateMesa(id: number, mesaData: Mesa): Observable<Mesa> {
    return this.http.put<Mesa>(`${this.apiUrl}/mesa/${id}`, mesaData);
  }

  // Elimina una mesa
  deleteMesa(id: number): Observable<Mesa> {
    return this.http.delete<Mesa>(`${this.apiUrl}/mesa/${id}`);
  }
}

export interface Mesa {
  id_mesa: number;
  num_mesa: number;
  capacidad: number;
  estado: string;
}
