import { Component } from '@angular/core';
import { Roles, RolesService } from 'src/app/services/usuario/roles.service';
import { Usuario, UsuariosService } from 'src/app/services/usuario/usuarios.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {
  usuarios: Usuario[] = [];
  roles: Roles[] = [];

  selectedRolId: number | undefined;

  newUser: any = {
    user_usuario: null,
    nombre_user: null,
    apellido_user: null,
    tipo_rol: null,
    estado: 'Activo'
  };

  verRol: any = {
    id_rol: null,
    tipo_rol: null,
    detalle_rol: null,
    estado: 'Activo'
  }

  constructor(
    private usuarioService: UsuariosService,
    private rolesService: RolesService
  ) { }

  ngOnInit(): void {
    this.visualizar();
    // Usa el servicio de Roles para mostrarlo
    this.rolesService.getRoles().subscribe(roles => {
      this.roles = roles;
    });
  }

  visualizar() {
    this.usuarioService.getUsuarios().subscribe(response => {
      this.usuarios = response;
    }, error => {
      console.log(error);
    });
  }

  addUser(): void {
    this.usuarioService.createUsuario(this.newUser).subscribe(
      () => {
        this.visualizar();
      },
      (error: any) => {
        console.error('Error al ingresar el usuario:', error);
      }
    );
  }

  onChange(event: any) {
    this.selectedRolId = event.target.value;
  }
}
