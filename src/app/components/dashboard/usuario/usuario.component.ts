import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, UsuariosService } from 'src/app/services/usuario/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  usuario:  Usuario | undefined;
  id_usuario: number | undefined;

  constructor(
    private userService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.id_usuario = this.route.snapshot.params['id_usuario'];
    if (!this.id_usuario) {
      console.error('No se proporcionó el ID del usuario.');
      this.router.navigate(['/error']);
      return;
    }
    this.visualizar(this.id_usuario);
  }

  visualizar(id: number): void {
    this.userService.getUsuario(id).subscribe(
      (response: Usuario) => {
        this.usuario = response; // Asigna el usuario directamente en lugar de [response]
      },
      (error: any) => {
        console.error('Error al obtener los detalles del usuario:', error);
        this.router.navigate(['/error']);
      }
    );
  }
}