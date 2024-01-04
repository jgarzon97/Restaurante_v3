import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  // La URL base del Servidor Express
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Obtener todos los clientes
  getRoles(): Observable<Roles[]> {
    return this.http.get<Roles[]>(`${this.apiUrl}/roles`);
  }
}

export interface Roles {
  id_rol: number;
  tipo_rol: string;
  detalles_rol: string;
  estado: string;
}