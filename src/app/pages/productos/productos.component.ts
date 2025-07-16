import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductosService } from '../../services/productos.service';
import { CardProductoComponent } from '../../components/card-producto/card-producto.component';
import Producto from '../../../models/Producto';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Orden, PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, HeaderComponent, CardProductoComponent],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productosFiltrados: Producto[] = [];
  carrito: { producto: Producto; cantidad: number }[] = [];
  total:number=0;
  categoriaActual: string | null = null;

  constructor(
    public productosService: ProductosService,
    private pedidosService: PedidosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
  this.route.queryParams.subscribe(params => {
    const categoria = params['categoria'];
    console.log('Categoria recibida:', categoria);

    this.productosService.obtenerProductos().subscribe((productos) => {
      if (categoria) {
        this.productosFiltrados = productos.filter(
          p => p.categoria.toLowerCase() === categoria.toLowerCase()
        );
        this.categoriaActual = categoria;
      } else {
        this.productosFiltrados = productos;
        this.categoriaActual = null;
      }
    });
  });
}

  agregarAlCarrito(event: { producto: Producto; cantidad: number }) {
  const { producto, cantidad } = event;

  if (producto.stock >= cantidad) {
    const itemExistente = this.carrito.find(item => item.producto.id === producto.id);

    if (itemExistente) {
      itemExistente.cantidad += cantidad;
    } else {
      this.carrito.push({ producto, cantidad });
    }

    this.total += producto.precio * cantidad;
    producto.stock -= cantidad;
  } else {
    console.warn('No hay suficiente stock para este producto');
  }
}

  trackById(index: number, item: Producto) {
  return item.id;
  }
  mensaje: string = '';
  mostrarMensaje: boolean = false;

  finalizarCompra() {
    if (this.carrito.length === 0) {
      this.mostrar('Tu carrito está vacío.');
      return;
    }

    const productosResumen = this.carrito.reduce((acc, prod) => {
      const existe = acc.find(p => p.id === prod.producto.id);
      if (existe) {
        existe.cantidad++;
      } else {
        acc.push({ id: prod.producto.id, nombre: prod.producto.nombre, cantidad: 1 });
      }
      return acc;
    }, [] as { id: string; nombre: string; cantidad: number }[]);

    const orden: Orden = {
      productos: productosResumen,
      total: this.total,
      fecha: new Date().toISOString(),
      estado: 'pendiente'
    };

    this.pedidosService.crearOrden(orden).subscribe({
      next: (nuevaOrden) => {
        console.log('Orden guardada:', nuevaOrden);
        this.mostrar('Compra realizada con exito!');
        this.carrito = [];
        this.total = 0;
      },
      error: (err) => {
        console.error('Error al guardar orden:', err);
        this.mostrar('Hubo un problema al procesar la compra.');
      }
    });
  }

  mostrar(mensaje: string) {
    this.mensaje = mensaje;
    this.mostrarMensaje = true;
    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 3000);
  }

}

