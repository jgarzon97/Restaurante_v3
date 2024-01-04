import { Component } from '@angular/core';
import { ClientesService, Cliente } from 'src/app/services/usuario/clientes.service';
import { NewUsuario } from 'src/app/services/usuario/usuarios.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  newClient: any = {
    cedula: null,
    nombre: null,
    apellido: null,
    direccion: null,
    email: null,
    telefono: null
  };
  constructor(private clientesService: ClientesService) { }

  crearCliente(): void {
    const nuevoCliente: Cliente = {
      id_cliente: 0, // Asegúrate de asignar un valor adecuado si lo necesitas
      cedula: this.newClient.cedula,
      nombre: this.newClient.nombre,
      apellido: this.newClient.apellido,
      direccion: this.newClient.direccion,
      email: this.newClient.email,
      telefono: this.newClient.telefono
    };

    this.clientesService.createCliente(nuevoCliente).subscribe(
      (respuesta: Cliente) => {
        console.log('Cliente creado:', respuesta);
        // Puedes redirigir a otra página o mostrar un mensaje de éxito
      },
      (error: any) => {
        console.error('Error al crear el cliente:', error);
        // Maneja el error mostrando un mensaje o realizando alguna acción adicional
      }
    );
  }
}
