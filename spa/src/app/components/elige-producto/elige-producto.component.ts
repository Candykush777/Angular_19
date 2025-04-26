import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { ApiConexService } from '../../services/api-conex.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-elige-producto',
  standalone: false,
  templateUrl: './elige-producto.component.html',
  styleUrl: './elige-producto.component.css',
})
export class EligeProductoComponent implements OnInit {
  productoSeleccionado?: Producto;

  productosOriginal: Producto[] = [];

  productos: Producto[] = [];

  selectedCategory: string = '';
  selectedBrand: string = '';

  constructor(private api: ApiConexService) {}

  seleccionarProducto(prod: Producto) {
    this.productoSeleccionado = prod;
  }

  ngOnInit(): void {
    this.api.getProductos().subscribe({
      next: (prods) => {
        this.productosOriginal = prods;
        this.productos = [...prods];

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

  filterProducts(): void {
    this.productos = this.productosOriginal.filter((product) => {
      const matchCategory =
        !this.selectedCategory || product.category === this.selectedCategory;
      const matchBrand =
        !this.selectedBrand || product.brand === this.selectedBrand;
      return matchCategory && matchBrand;
    });

    if (this.productos.length === 0) {
      Swal.fire({
        title: 'Sin resultados',
        text: 'No se encontraron productos con esos criterios',
        icon: 'info',
        confirmButtonText: 'OK',
      });
    }
  }
}
