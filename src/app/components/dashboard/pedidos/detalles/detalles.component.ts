import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detalle, DetallesService } from 'src/app/services/pedido/detalles.service';
import { Producto, ProductosService } from 'src/app/services/producto/productos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})

export class DetallesComponent {
  detalles: Detalle[] = [];
  productos: Producto[] = [];
  selectedProductId: number | undefined;
  totalPrecio: number = 0;
  numeroRuta: number = 0;

  constructor(
    private detallesService: DetallesService,
    private productosService: ProductosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.obtenerDetalles();
    this.route.params.subscribe(params => {
      this.numeroRuta = +params['id_pedido'];
    });
    this.productosService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }

  onChange(event: any) {
    this.selectedProductId = event.target.value;
    console.log('ID seleccionado:', this.selectedProductId);
  }

  obtenerDetalles() {
    const idPedido = this.route.snapshot.paramMap.get('id_pedido');
    if (idPedido) {
      this.detallesService.getDetalles_Productos(Number(idPedido)).subscribe(
        (response: Detalle[]) => {
          this.detalles = response.map(detalle => ({
            ...detalle,
          }));
          console.log('Detalles recibidos:', this.detalles);
          this.calcularTotales();
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      console.log('No se encontró el ID del pedido.');
    }
  }


  calcularTotales() {
    let cantidadConPrecioTotal = this.detalles.reduce((total, detalle) => {
      if (detalle.precio_total !== undefined && detalle.precio_total !== null && detalle.precio_total !== 0) {
        return total + detalle.cantidad_total;
      }
      return total;
    }, 0);
      
    this.totalPrecio = this.detalles.reduce((total, detalle) => {
      if (detalle.precio_total !== undefined && detalle.precio_total !== null) {
        return total + (parseFloat(detalle.precio_total.toString()) || 0);
      }
      return total;
    }, 0);
  }
}
