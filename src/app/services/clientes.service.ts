import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, mergeMap, throwError } from 'rxjs';
import { Cliente } from '../interfaces/Cliente';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private baseURL: string;

  constructor(private httpClient: HttpClient) {
    this.baseURL = 'http://localhost:5279/api/Cliente';
  }

  getClientes(): Observable<Cliente[]> {
    const urlSecon = '/getClientes';

    return this.httpClient.get<Cliente[]>(this.baseURL + urlSecon);
  }

  getCliente(id: number): Observable<Cliente> {
    const urlSecon = '/getCliente';
    const params = new HttpParams().set('idCliente', id);

    return this.httpClient.get<Cliente>(this.baseURL + urlSecon, { params });
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    const urlSecon = '/updateCliente';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    cliente.nombres = 'Hernan S';

    return this.httpClient
      .put<Cliente>(this.baseURL + urlSecon, cliente, { headers })
      .pipe(
        catchError((error) => {
          console.log('Error al actualizar el cliente:', error);
          return throwError('No se pudo actualizar el cliente');
        }),
        mergeMap(() => this.getCliente(cliente.id))
      );

    /*var response = this.httpClient
      .put<Cliente>(this.baseURL + urlSecon, cliente, {
        headers,
      })
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
      });

    //console.log(response);

    if (response) {
      var respuesta = this.getCliente(cliente.id).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
      });
      console.log('A');
      console.log(respuesta);
      return this.getCliente(cliente.id);
    } else throw new Error('No se pudo actualizar el cliente');*/
  }
}
