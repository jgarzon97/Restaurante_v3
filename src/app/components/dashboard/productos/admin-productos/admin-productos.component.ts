import { Component } from '@angular/core';
import { Producto, ProductosService } from 'src/app/services/producto/productos.service';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent {
  productos: Producto[] = [];

  constructor(
    private productoService : ProductosService,
  ) { }

  ngOnInit(): void {
    this.visualizar();
  }

  visualizar() {
    this.productoService.getProductos().subscribe(response => {
      this.productos = response;
    }, error => {
      console.log(error);
    });
  }
}
