import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MesasService } from 'src/app/services/mesa/mesas.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent {
  mesas: any[] = [];

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
}
