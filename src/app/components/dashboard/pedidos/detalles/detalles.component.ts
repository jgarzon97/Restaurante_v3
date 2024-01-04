import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detalle, Detalle_pedido, DetallesService } from 'src/app/services/pedido/detalles.service';
import { Producto, ProductosService } from 'src/app/services/producto/productos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})

export class DetallesComponent {
  detalles: Detalle[] = [];
  detalle_pedido: Detalle_pedido[] = []
  productos: Producto[] = [];
  id_pedido: number | null = null;

  selectedProductId: number | undefined;

  totalPrecio: number = 0;
  numeroRuta: number = 0;

  detallesPedido: any = {
    id_producto: null,
    cantidad: null,
    detalle: ' '
  };

  constructor(
    private detallesService: DetallesService,
    private productosService: ProductosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Captura el id_pedido
    this.route.params.subscribe(params => {
      const id_pedido = params['id_pedido'];
      this.id_pedido = Number(id_pedido);
    });
    // Usa el servicio de Producto para mostrarlo
    this.productosService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }

  onChange(event: any) {
    this.selectedProductId = event.target.value;
  }

  addDetalles() {
    if (this.id_pedido === null) {
      console.error('El id_pedido no está definido');
      return;
    }
  
    this.detallesPedido.id_pedido = this.id_pedido;
  
    this.detallesService.createPedido_Producto(this.detallesPedido).subscribe(
      (respuesta: any) => {
        console.log('Detalles ingresados:', respuesta);
        this.obtenerDetalles();
      },
      (error: any) => {
        console.error('No se ingresaron los pedidos:', error);
      }
    );
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
