import { Component } from '@angular/core';
import { Usuario, UsuariosService } from 'src/app/services/usuario/usuarios.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {
  usuarios: Usuario[] = [];

  constructor(
    private usuarioService : UsuariosService,
  ) { }

  ngOnInit(): void {
    this.visualizar();
  }

  visualizar() {
    this.usuarioService.getUsuarios().subscribe(response => {
      this.usuarios = response;
    }, error => {
      console.log(error);
    });
  }
}
