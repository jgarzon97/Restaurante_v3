import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MesasComponent } from './mesas/mesas.component';
import { AdminMesasComponent } from './mesas/admin-mesas/admin-mesas.component';
import { ProductosComponent } from './productos/productos.component';
import { AdminProductosComponent } from './productos/admin-productos/admin-productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DetallesComponent } from './pedidos/detalles/detalles.component';
import { RolesComponent } from './roles/roles.component';
import { PagosComponent } from './pagos/pagos.component';
import { ClienteComponent } from './pagos/cliente/cliente.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'admin/mesas', component: AdminMesasComponent },
      { path: 'mesas', component: MesasComponent },
      { path: 'admin/productos', component: AdminProductosComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'pedidos', component: PedidosComponent },
      { path: 'detalles/:id_pedido', component: DetallesComponent },
      { path: 'admin/roles', component: RolesComponent },
      { path: 'facturas', component: PagosComponent },
      { path: 'clientes', component: ClienteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
