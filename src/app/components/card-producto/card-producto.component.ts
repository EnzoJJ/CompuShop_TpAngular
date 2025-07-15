import { Component, EventEmitter, Input, Output } from '@angular/core';
import Producto from '../../../models/Producto';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-producto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card-producto.component.html',
  styleUrl: './card-producto.component.css'
})
export class CardProductoComponent {
  @Input() producto!: Producto;
  @Output() agregar = new EventEmitter<{ producto: Producto, cantidad: number }>();

  cantidad: number = 1;

  incrementarCantidad() {
    if (this.cantidad < this.producto.stock) {
      this.cantidad++;
    }
  }

  decrementarCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }

  agregarProducto() {
    if (this.producto.stock >= this.cantidad) {
      this.agregar.emit({ producto: this.producto, cantidad: this.cantidad });
    }
  }
}
