import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FacturasService {

  private apiUrl = 'http://localhost:3000'; // La URL base del servidor Express

  constructor(private http: HttpClient) { }

  // Apartir de el ID Pedido y de un ID Cliente para generar una Factura
  createFactura(pedidoId: number, clienteId: number): Observable<Factura> {
    const pedidoData = { id_pedido: pedidoId, id_cliente: clienteId };
    return this.http.post<Factura>(`${this.apiUrl}/factura`, pedidoData);
  }

  // Obtener todos los pedidos
  getFactura(): Observable<Factura[]> {
    return this.http.get<Factura[]>(`${this.apiUrl}/facturas`);
  }
}

export interface Factura {
  id_factura: number;
  fecha: string;
  total: number;
  estado_de_pago: string;
  id_pedido: number;
  nombre: string;
  apellido: string;
}
