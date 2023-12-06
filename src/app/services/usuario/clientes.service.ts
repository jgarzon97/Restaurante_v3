import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  // La URL base del servidor Express
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Obtener todos los clientes
  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/clientes`);
  }

  // Crear un cliente
  createCliente(clientData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cliente`, clientData);
  }
}
