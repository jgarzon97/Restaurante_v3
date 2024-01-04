import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  // La URL base del servidor Express
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Obtener todos las productos
  getCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.apiUrl}/categorias`);
  }

  createCategoria(categoriaData: Categoria[]): Observable<Categoria[]> {
    return this.http.post<Categoria[]>(`${this.apiUrl}/categoria`, categoriaData);
  }
}

export interface Categoria {
  id_categoria: number;
  nombre: string;
  estado: string;
}

