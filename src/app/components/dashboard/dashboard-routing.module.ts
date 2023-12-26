import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
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
import { FacturasComponent } from './pedidos/facturas/facturas.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'mesas', component: MesasComponent },
      { path: 'admin/mesas', component: AdminMesasComponent },
      { path: 'admin/productos', component: AdminProductosComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'pedidos', component: PedidosComponent },
      { path: 'detalles/:id_pedido', component: DetallesComponent },
      { path: 'admin/roles', component: RolesComponent },
      { path: 'pagos', component: PagosComponent },
      { path: 'clientes', component: ClienteComponent },
      { path: 'facturas', component: FacturasComponent },
      { path: 'usuario/:id_usuario', component: UsuarioComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
