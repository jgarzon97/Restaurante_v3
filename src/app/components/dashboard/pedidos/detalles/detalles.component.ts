import { Component } from '@angular/core';
import { Detalle, DetallesService } from 'src/app/services/pedido/detalles.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})

export class DetallesComponent {
  detalles: Detalle[] = [];

  constructor(
    private detallesService: DetallesService
  ) { }

  ngOnInit(): void {
    this.visualizar();
  }

  visualizar() {
    this.detallesService.getPedido_Producto().subscribe(response => {
      this.detalles = response;
    }, error => {
      console.log(error);
    });
  }

}
