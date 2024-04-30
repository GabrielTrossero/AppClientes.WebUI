import { Component, Input } from '@angular/core';
import { Cliente } from '../../interfaces/Cliente';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailClienteComponent } from '../detail-cliente/detail-cliente.component';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.scss'],
})
export class ListClientesComponent {
  @Input() clientes: Cliente[];

  constructor(private router: Router, private modalService: NgbModal) {
    this.clientes = [];
  }

  verCliente(id: number) {
    this.router.navigate(['/cliente', id]);
  }

  openModal(id: number) {
    const modalRef = this.modalService.open(DetailClienteComponent);
    modalRef.componentInstance.idCliente = id; // Manda el id hacia DetailComponent a traves de @Input
  }
}
