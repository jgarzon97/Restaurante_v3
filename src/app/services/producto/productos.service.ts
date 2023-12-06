import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // La URL base del servidor Express
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Obtener todos las productos
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/productos`);
  }
}

export interface Producto {
  id_producto: number;
  nombre: string;
  stock: number;
  precio: number;
  tiempo: string;
  estado: string;
  nombre_categoria: string;
  imagen: string;
}
