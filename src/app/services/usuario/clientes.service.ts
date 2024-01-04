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
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}/clientes`);
  }

  // Crear un cliente
  createCliente(clientData: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}/cliente`, clientData);
  }
}

export interface Cliente {
  id_cliente: number;
  cedula: string;
  nombre: string;
  apellido: string;
  direccion: string;
  email: string;
  telefono: string;
}
