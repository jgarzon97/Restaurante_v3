import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mesa, MesasService } from 'src/app/services/mesa/mesas.service';
import { PedidosService } from 'src/app/services/pedido/pedidos.service';


@Component({
  selector: 'app-admin-mesas',
  templateUrl: './admin-mesas.component.html',
  styleUrls: ['./admin-mesas.component.css']
})
export class AdminMesasComponent {
  mesas: Mesa[] = [];
  actualizacion: any;
  busqueda: string = '';
  id_usuario: number | null = null;

  nuevaMesa: any = {
    num_mesa: null,
    capacidad: null,
    estado: 'Disponible'
  };

  constructor(
    private mesasService: MesasService,
    private pedidosService: PedidosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    const mesaId = this.activatedRoute.snapshot.params['id_mesa'];

    if (mesaId !== undefined) {
      console.log('ID de la mesa a editar: ' + mesaId);
      this.cargarDatos(mesaId);
    } else {
      console.log('Selecciona la mesa para Editar');
    }
  }  

  cargarDatos(mesaId: number) {

  }

  ngOnInit(): void {
    this.id_usuario = this.getUserIdFromLocalStorage();
    const isAuthenticated = localStorage.getItem('id_rol');
    if (!isAuthenticated) {
      console.log('No puedes ingresar, Inicia sesión');
      this.router.navigate(['/login']);
    } else {
      this.visualizar();
    }
  }

  getUserIdFromLocalStorage(): number | null {
    const userIdString = localStorage.getItem('id_usuario');
    return userIdString ? +userIdString : null;
  }

  // Muestra todas la Mesas
  visualizar() {
    this.mesasService.getMesas().subscribe(response => {
      this.mesas = response;
    }, error => {
      console.log(error);
    });
  }

  // Función para agregar un Pedido seleccionando una Mesa
  crearPedido(id_usuario: number | null, mesas: any): void {
    if (id_usuario === null) {
      console.error('El id_usuario no está definido');
      return;
    }

    this.pedidosService.createPedido(id_usuario, mesas).subscribe(() => {
      alert('Se creó el pedido correctamente');
      this.visualizar();
    });
  }

  // Función para agregar un Mesa
  addmesa(): void {
    this.mesasService.createMesa(this.nuevaMesa).subscribe(
      (respuesta: any) => {
        console.log('Mesa creada:', respuesta);
        this.visualizar();
      },
      (error: any) => {
        console.error('Error al crear la mesa:', error);
      }
    );
  }
  

  // Función para modificar la mesa con el id_mesa específico
  modificar(id_mesa: number) {
    console.log(`Modo edición de la Mesa ${id_mesa}`)
    
  }
  
  eliminar(id_mesa: number) {

  }

}
