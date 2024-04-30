import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/Cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-cliente',
  templateUrl: './detail-cliente.component.html',
  styleUrls: ['./detail-cliente.component.scss'],
})
export class DetailClienteComponent {
  @Input() idCliente: number;
  cliente: Cliente;

  constructor(
    private route: ActivatedRoute,
    private clientesService: ClientesService,
    public modalService: NgbModal
  ) {
    this.idCliente = 0;
    this.cliente = {} as Cliente;
  }

  ngOnInit() {
    this.clientesService.getCliente(this.idCliente).subscribe({
      next: (data) => {
        this.cliente = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  editarCliente() {
    //this.cliente.nombres = 'HERNAN';
    this.clientesService.updateCliente(this.cliente).subscribe({
      next: (data) => {
        this.cliente.nombres = data.nombres;
        console.log('S');
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  borrarCliente() {}
}
