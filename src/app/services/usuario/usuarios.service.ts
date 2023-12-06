import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // La URL base del Servidor Express
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Obtener un usuario por ID
  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/usuario/${id}`);
  }
  // Obtener nombres de usuarios
  getUsuarioRoles(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}/usuarioRoles`);
  }

  // Obtener nombres de usuarios
  getUsuarioNombres(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/usuarioNombres`);
  }

  // Obtener lista de usuarios
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`);
  }

  // Crear un nuevo usuario
  createUsuario(usuarioData: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/usuario`, usuarioData);
  }
}

export interface Usuario {
  id_usuario: number;
  user_usuario: string;
  pass_usuario: string;
  nombre_user: string;
  apellido_user: string;
  id_rol: number;
  estado: string;
}
