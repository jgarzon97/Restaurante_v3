import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';

// Componentes
import { DashboardComponent } from './dashboard.component';
import { RolesComponent } from './roles/roles.component';
import { ProductosComponent } from './productos/productos.component';
import { NuevosProductosComponent } from './productos/nuevos-productos/nuevos-productos.component';
import { MesasComponent } from './mesas/mesas.component';
import { NuevaMesaComponent } from './mesas/admin-mesas/nueva-mesa/nueva-mesa.component';
import { AdminMesasComponent } from './mesas/admin-mesas/admin-mesas.component';
import { NuevosComponent } from './roles/nuevos/nuevos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DetallesComponent } from './pedidos/detalles/detalles.component';
import { PagosComponent } from './pagos/pagos.component';
import { ClienteComponent } from './pagos/cliente/cliente.component';
import { AdminProductosComponent } from './productos/admin-productos/admin-productos.component';
import { FacturasComponent } from './pedidos/facturas/facturas.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductosComponent,
    RolesComponent,
    NuevosProductosComponent,
    MesasComponent,
    NuevaMesaComponent,
    AdminMesasComponent,
    NuevosComponent,
    PedidosComponent,
    DetallesComponent,
    PagosComponent,
    ClienteComponent,
    AdminProductosComponent,
    FacturasComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
