import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'productos', component:ProductosComponent},
    { path: 'pedidos', component: PedidosComponent }
];
