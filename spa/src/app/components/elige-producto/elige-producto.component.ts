import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { ApiConexService } from '../../services/api-conex.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-elige-producto',
  standalone: false,
  templateUrl: './elige-producto.component.html',
  styleUrl: './elige-producto.component.css'
})
export class EligeProductoComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private api: ApiConexService) {}

  ngOnInit(): void {
    this.api.getProductos().subscribe({
      next: (prods) => {
        this.productos = prods;
        console.log('Productos cargados correctamente', prods);
        Swal.fire({
          title: 'Productos cargados',
          text: 'Los datos se han obtenido correctamente de la API.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      },

      error: (err) => {
        console.error('Error al cargar productos:', err);

        Swal.fire({
          title: 'Error',
          text: 'No se pudieron cargar los productos. Intenta más tarde.',
          icon: 'error',
          confirmButtonText: 'Cerrar',
        });
      },
    });
  }
}
