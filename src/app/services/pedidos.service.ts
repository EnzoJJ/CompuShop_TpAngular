import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Orden {
  id?: string;
  productos: { id: string; nombre: string; cantidad: number }[];
  total: number;
  fecha: string;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private apiUrl = 'https://68713aca7ca4d06b34b9c973.mockapi.io/pedidos';

  constructor(private http: HttpClient) {}

  crearOrden(orden: Orden): Observable<Orden> {
    return this.http.post<Orden>(this.apiUrl, orden);
  }
  obtenerOrdenes(): Observable<Orden[]> {
  return this.http.get<Orden[]>(this.apiUrl);
}

}
