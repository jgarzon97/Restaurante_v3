import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private apiUrl = 'http://localhost:3000'; // La URL base del servidor Express

  constructor(private http: HttpClient) { }

  // Apartir de el ID del Usuario del sistema y del ID de la Mesa se genera un Pedido
  createPedido(userId: number, idMesa: number): Observable<Pedido> {
    const pedidoData = { id_usuario: userId, id_mesa: idMesa };
    return this.http.post<Pedido>(`${this.apiUrl}/pedido`, pedidoData);
  }

  // Obtener todos los pedidos
  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}/pedidos`);
  }
}

export interface Pedido {
  id_pedido: number;
  fecha: string;
  hora: number;
  estado: string;
  id_usuario: number;
  id_mesa: number;
}
