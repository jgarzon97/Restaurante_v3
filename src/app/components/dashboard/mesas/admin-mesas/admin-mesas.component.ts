import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MesasService } from 'src/app/services/mesa/mesas.service';

@Component({
  selector: 'app-admin-mesas',
  templateUrl: './admin-mesas.component.html',
  styleUrls: ['./admin-mesas.component.css']
})
export class AdminMesasComponent {
  mesas: any[] = [];
  actualizacion: any;
  busqueda: string = '';

  constructor(
    private mesasService : MesasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const isAuthenticated = localStorage.getItem('id_rol');
    if (!isAuthenticated) {
      console.log('No puedes ingresar, Inicia sesión');
      this.router.navigate(['/login']);
    } else {
      this.visualizar();
    }
  }

  visualizar() {
    this.mesasService.getMesas().subscribe(response => {
      this.mesas = response;
    }, error => {
      console.log(error);
    });
  }

  addmesa() {

  }

  modificar(dato: number) {

  }

  eliminar(dato: number) {

  }
}
