import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/usuario/auth.service';
import axios from 'axios'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) {
    this.form = this.fb.group({
      user_usuario: ['', Validators.required],
      pass_usuario: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  Ingresar() {
    if (this.form.valid) {
      const user_usuario = this.form.value.user_usuario;
      const pass_usuario = this.form.value.pass_usuario;

      const url = 'http://localhost:3000/iniciarSesion';
      const datosIngreso = {
        user_usuario: user_usuario,
        pass_usuario: pass_usuario
      };

      axios.post(url, datosIngreso)
        .then((response) => {
          // Verifica si el estado es "Activo"
          if (response.data.estado === 'Activo') {
            // Almacena en el local storage, maneja la respuesta y Autenticación exitosa
            localStorage.setItem('id_rol', response.data.id_rol);
            localStorage.setItem('id_usuario', response.data.id_usuario);
            localStorage.setItem('estado', response.data.estado);
            localStorage.setItem('user_usuario', response.data.user_usuario);
            localStorage.setItem('apellido_user', response.data.apellido_user);
            this.fakeloading();
            console.log('Ingreso exitoso');
          }
          // El usuario no está "Activo", muestra un mensaje de error y reinicia el formulario
          else {
            this.inactivo();
            this.form.reset();
          }
        })
        .catch((error) => {
          // Maneja el error, muestra un mensaje de error y reinicia el formulario
          alert('Error en el Ingreso.');
          this.form.reset();
        });
    }
  }

  fakeloading() {
    const id_rol = localStorage.getItem('id_rol');
    this.loading = true;
    setTimeout(() => {
      if (id_rol === '1') {
        this.router.navigate(['dashboard/admin/mesas']);
      } else {
        this.router.navigate(['dashboard']);
      }
    }, 1500);
  }

  inactivo(){
    const rol = localStorage.getItem('estado');
    this.loading = true;
    setTimeout(() => {
      if (rol === 'Activo') {
        this.router.navigate(['dashboard']);
      } else {
        this.router.navigate(['dashboard']);
      }
    }, 1500);
  }
}
