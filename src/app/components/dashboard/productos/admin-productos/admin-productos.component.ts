import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto, ProductosService } from 'src/app/services/producto/productos.service';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})

export class AdminProductosComponent {
  productos: Producto[] = [];
  busqueda: string = '';

  constructor(
    private productoService : ProductosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.visualizar();
  }

  // Método para cargar todos los productos.
  visualizar() {
    this.productoService.getProductos().subscribe(response => {
      this.productos = response;
    }, error => {
      console.log(error);
    });
  }

  // Método para filtrar los productos.
  buscarProductos() {
    if (this.busqueda.trim() === '') {
      this.visualizar(); // Cargar todos los productos nuevamente si la búsqueda está vacía
    } else {
      const busquedaMinuscula = this.busqueda.toLowerCase();
      this.productos = this.productos.filter(producto => 
        producto.nombre.toLowerCase().includes(busquedaMinuscula)
      );
    }
  }
}
