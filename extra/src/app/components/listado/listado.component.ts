import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria.model';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiConexionService } from '../../services/api-conexion.service';

@Component({
  selector: 'app-listado',
  imports: [CommonModule,FormsModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})


export class ListadoComponent implements OnInit {

  constructor(private api: ApiConexionService) {}

  categorias: Categoria[] = []; 
  productos: Product[] = [];
  selectedCategoriaSlug: string = ''; 

  ngOnInit(): void {
    this.api.getCategorias().subscribe({
      next: cats => {
        this.categorias = cats;
        if (cats.length) {
          this.selectedCategoriaSlug = cats[0].slug; 
          this.onCategoriaChange(this.selectedCategoriaSlug);
        }
      },
      error: (err) => console.error('Error al cargar categorías', err)
    });
  }

  onCategoriaChange(categoriaSlug: string): void { 
    this.api.getProductosPorCategoria(categoriaSlug).subscribe({
      next: prods => this.productos = prods,
      error: err => console.error('Error al cargar productos', err)
    });
  }
}
