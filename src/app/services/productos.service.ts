import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Producto from '../../models/Producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'https://68713aca7ca4d06b34b9c973.mockapi.io/productos';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }
  actualizarProducto(id: string, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${id}`, producto);
  }
  eliminarProducto(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}


/*constructor(private http: HttpClient) {
    this.productos = [
      {
        id:"1",
        nombre:"Procesador AMD RYZEN 5 4600G 4.2 GHZ AM4",
        precio:213.999,
        img:'/assets/amd.jpeg',
        categoria:"microprocesadores",
        stock:5
      },
      {
        id:"2",
        nombre:"Procesadoo Intel Core I7 12700K LGA1700",
        precio:333.554,
        img:'/assets/intel.jpeg',
        categoria:"microprocesadores",
        stock:5
      },
      {
        id:"3",
        nombre:"Motherboard AM4 - Asus Prime A520M",
        precio:79.999,
        img:'/assets/asusMother.jpeg',
        categoria:"motherboards",
        stock:5
      },
      {
        id:"4",
        nombre:"Memoria Ram DDR4 - 8Gb 3600 Mhz Kingston Fury Beast Rgb",
        precio:30.999,
        img:'/assets/ramFury.jpeg',
        categoria:"memorias ram",
        stock:5
      },
      {
        id:"5",
        nombre:"Cooler Gamer 120Mm Alseye Halo 4.0 S-Rgb Led",
        precio:30.999,
        img:'/assets/cooler.webp',
        categoria:"coolers",
        stock:5
      },
      {
        id:"6",
        nombre:"Procesador Intel Core i9",
        precio:808.999,
        img:'/assets/i9.jpeg',
        categoria:"microprocesadores",
        stock:5
      },
      {
        id:"7",
        nombre:"Procesador AMD Ryzen 3",
        precio:220.999,
        img:'/assets/amd3.jpg',
        categoria:"microprocesadores",
        stock:0
      },
      {
        id:"8",
        nombre:"Procesador AMD Ryzen 3",
        precio:149.999,
        img:'/assets/amd3.jpg',
        categoria:"microprocesadores",
        stock:5
      },
      {
        id:"9",
        nombre:"Procesador AMD Ryzen 3",
        precio:159.999,
        img:'/assets/amd3.jpg',
        categoria:"microprocesadores",
        stock:0
      },
      {
        id:"10",
        nombre:"Mother Gamer Gigabyte H510m S2 V2 Intel Lga1200 Ddr4",
        precio:45.999,
        img:'/assets/mother2.jpg',
        categoria:"motherboards",
        stock:5
      },
      {
        id:"11",
        nombre:"Mother Gigabyte A620mh Amd Am5 Pcie 4.0 M.2",
        precio:80.999,
        img:'/assets/mother3.jpg',
        categoria:"motherboards",
        stock:0
      },
      {
        id:"12",
        nombre:"Motherboard AM4 - Asus Prime A520M",
        precio:59.999,
        img:'/assets/asusMother.jpeg',
        categoria:"motherboards",
        stock:5
      },
      {
        id:"13",
        nombre:"Memoria Ram DDR4 - 16Gb 3200 Mhz Kingston Fury Beast",
        precio:90.999,
        img:'/assets/ram2.jpeg',
        categoria:"memorias ram",
        stock:0
      },
      {
        id:"14",
        nombre:"Memoria Ram DDR4 8GB 3200Mhz Kingston Fury Beast RGB",
        precio:39.999,
        img:'/assets/ram3.jpg',
        categoria:"memorias ram",
        stock:5
      },
      {
        id:"15",
        nombre:"Memoria Patriot DDR5 32GB (2x16GB) 6000MHz Viper Venom RGB",
        precio:32.999,
        img:'/assets/ram4.jpg',
        categoria:"memorias ram",
        stock:0
      },
      {
        id:"16",
        nombre:"Halo Fan Cooler Pc Gamer Hummer By Nox Gabinete 120mm Argb",
        precio:28.999,
        img:'/assets/cooler2.webp',
        categoria:"coolers",
        stock:5
      },
      {
        id:"17",
        nombre:"Cooler Gamer 120Mm Alseye Halo 4.0 S-Rgb Led",
        precio:39.999,
        img:'/assets/cooler3.jpg',
        categoria:"coolers",
        stock:5
      },
      {
        id:"18",
        nombre:"Cpu Cooler Gamemax Gamma 500 Rainbow",
        precio:36.692,
        img:'/assets/cooler4.jpg',
        categoria:"coolers",
        stock:0
      },
      {
        id:"19",
        nombre:"Motherboard AM4 - Asus Prime A520M",
        precio:79.999,
        img:'/assets/asusMother.jpeg',
        categoria:"motherboards",
        stock:5
      },
      {
        id:"20",
        nombre:"Memoria Ram DDR4 - 8Gb 3600 Mhz Kingston Fury Beast Rgb",
        precio:34.999,
        img:'/assets/ramFury.jpeg',
        categoria:"memorias ram",
        stock:0
      },
      {
        id:"21",
        nombre:"Cooler Gamer 120Mm Alseye Halo 4.0 S-Rgb Led",
        precio:36.692,
        img:'/assets/cooler.webp',
        categoria:"coolers",
        stock:5
      }
    ];
  }*/ 