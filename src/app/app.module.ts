import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';
import { HomeComponent } from './home/home.component';
import { DetailClienteComponent } from './clientes/detail-cliente/detail-cliente.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListClientesComponent,
    HomeComponent,
    DetailClienteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
