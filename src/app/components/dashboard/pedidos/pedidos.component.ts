import { Component } from '@angular/core';
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
}
