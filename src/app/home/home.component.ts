import { Component } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../interfaces/Cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public arrayClientes: Cliente[];

  constructor(private clientesService: ClientesService) {
    this.arrayClientes = [];
  }

  ngOnInit() {
    this.clientesService.getClientes().subscribe({
      next: (data) => {
        this.arrayClientes = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
