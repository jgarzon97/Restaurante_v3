import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido, PedidosService } from 'src/app/services/pedido/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  pedidos: Pedido[] = [];

  constructor(
    private pedidosService : PedidosService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.visualizar();
  }
  
  visualizar() {
    this.pedidosService.getPedidos().subscribe(response => {
      this.pedidos = response;
    }, error => {
      console.log(error);
    });
  }

  verDetallePedido(id_pedido: number): void {
    this.router.navigate(['/dashboard/detalles/', id_pedido]);
  }
 
  borrarPedido(id: number): void {
    this.pedidosService.deletePedido(id).subscribe((resultado) => {
      alert(`El Pedido ${id} ha sido borrado.`);
      this.visualizar();
    });
  }
}
