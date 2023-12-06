import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  id_rol: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    const rolActual = localStorage.getItem('id_rol');

    if(rolActual !== null) {
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
}
