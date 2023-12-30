import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario, UsuariosService } from 'src/app/services/usuario/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  usuario: Usuario[] = [];
  id_usuario: number | undefined;

  constructor(
    private userService: UsuariosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id_usuario = this.route.snapshot.params['id_usuario'];
    if (this.id_usuario) {
      this.visualizar(this.id_usuario);
    } else {
      console.error('No se proporcionó el ID del usuario.');
    }
  }

  visualizar(id: number): void {
    this.userService.getUsuario(id).subscribe(
      (response: Usuario) => {
        this.usuario = [response]; // Suponiendo que se espera un solo usuario
        console.log(this.usuario); // Verificar la respuesta del servicio
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
    
}
