import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetallesService {

  private apiUrl = 'http://localhost:3000'; // La URL base del servidor Express

  constructor(private http: HttpClient) { }

  getPedido_Productos(): Observable<Detalle[]> {
    return this.http.get<Detalle[]>(`${this.apiUrl}/pedidoProductos`);
  }

  getPedido_Producto(id: number): Observable<Detalle[]> {
    return this.http.get<Detalle[]>(`${this.apiUrl}/pedidoProducto/${id}`);
  }

  getDetalles_Productos(id: number): Observable<Detalle[]> {
    return this.http.get<Detalle[]>(`${this.apiUrl}/detallesProductos/${id}`);
  }

  createPedido_Producto(pedidoData: Detalle[]): Observable<Detalle[]> {
    return this.http.post<Detalle[]>(`${this.apiUrl}/pedidoProducto`, pedidoData);
  }

  updatePedido_Producto(id: number, pedidoData: Detalle[]): Observable<Detalle[]> {
    return this.http.put<Detalle[]>(`${this.apiUrl}/pedidoProducto/${id}`, pedidoData);
  }

  deletePedido_Producto(id: number): Observable<Detalle[]> {
    return this.http.delete<Detalle[]>(`${this.apiUrl}/pedidoProducto/${id}`);
  }
}

export interface Detalle {
  id_pedido: number;
  nombre_producto: string;
  precio_unitario: number;
  cantidad_total: number;
  precio_total: number;
  detalle: string;
}
