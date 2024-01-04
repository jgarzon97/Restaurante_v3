import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria, CategoriasService } from 'src/app/services/producto/categorias.service';
import { Producto, ProductosService } from 'src/app/services/producto/productos.service';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})

export class AdminProductosComponent {
  productos: Producto[] = [];
  categorias: Categoria[] = [];

  busqueda: string = '';
  selectedRolId: number | undefined;

  newCatego: any = {
    nombre: null,
  };

  constructor(
    private productoService : ProductosService,
    private categoriasService: CategoriasService,
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

    this.categoriasService.getCategoria().subscribe(response => {
      this.categorias = response;
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

  addCategoria() {
    this.categoriasService.createCategoria(this.newCatego).subscribe(
      (respuesta: any) => {
        console.log('Categoria creada:', respuesta);
      },
      (error: any) => {
        console.error('Error al crear la categoria:', error);
      }
    );
  }

  onChange(event: any) {
    this.selectedRolId = event.target.value;
  }
}
