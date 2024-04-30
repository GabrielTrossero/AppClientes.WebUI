import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailClienteComponent } from './clientes/detail-cliente/detail-cliente.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  }, //ruta raiz
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cliente/:id',
    component: DetailClienteComponent,
  },
  /*{
    path: 'buscar/:texto',
    component: BuscarComponent,
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
