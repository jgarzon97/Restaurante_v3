import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario, UsuariosService } from 'src/app/services/usuario/usuarios.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  id_rol: string = '';
  id_usuario: string = '';
  usuario: Usuario[] = [];

  constructor(
    private router: Router,
    private usuarioServices: UsuariosService
  ) { }

  ngOnInit(): void {
    const rolActual = localStorage.getItem('id_rol');

    if (rolActual !== null) {
      this.id_rol = rolActual;
    }
    else {
      alert('No puedes ingresar, Inicia sesión');
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }

  config() {
    const idActual = localStorage.getItem('id_usuario');

    if (idActual !== null) {
      const idUsuario = parseInt(idActual, 10);

      this.router.navigate(['dashboard/usuario/', idUsuario]);
    } else {
      alert('No se encontró el ID del usuario');
    }
  }
}
