import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // La URL base del Servidor Express
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Autenticar un usuario
  authUsuario(user_usuario: string, pass_usuario: string): Observable<any> {
    const body = { user_usuario, pass_usuario };
    return this.http.post(`${this.apiUrl}/auth`, body);
  }
}
