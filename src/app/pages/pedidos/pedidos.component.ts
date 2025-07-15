import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Orden, PedidosService } from '../../services/pedidos.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos: Orden[] = [];

  constructor(private pedidosService: PedidosService) {}

  ngOnInit(): void {
    this.pedidosService.obtenerOrdenes().subscribe({
      next: pedidos => this.pedidos = pedidos,
      error: err => console.error('Error cargando órdenes', err)
    });
  }
}
