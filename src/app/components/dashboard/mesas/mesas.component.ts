import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MesasService } from 'src/app/services/mesa/mesas.service';
import { PedidosService } from 'src/app/services/pedido/pedidos.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent {
  mesas: any[] = [];

  id_usuario: number | null = null;

  constructor(
    private mesasService: MesasService,
    private pedidosService: PedidosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    const mesaId = this.activatedRoute.snapshot.params['id_mesa'];
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
}
