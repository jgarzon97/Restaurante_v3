import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private apiUrl = 'http://localhost:3000'; // La URL base del servidor Express

  constructor(private http: HttpClient) { }

  createPedido(userId: number, idMesa: number): Observable<Pedido> {
    const pedidoData = { id_usuario: userId, id_mesa: idMesa };
    return this.http.post<Pedido>(`${this.apiUrl}/pedido`, pedidoData);
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
