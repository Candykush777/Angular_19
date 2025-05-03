// src/app/services/api-conexion.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product.model';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class ApiConexionService {
  private readonly categoriasUrl = 'https://dummyjson.com/products/categories';
  private readonly productosPorCategoriaUrl = 'https://dummyjson.com/products/category';

  constructor(private http: HttpClient) {}

  // Modificamos para obtener objetos Categoria[]
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.categoriasUrl);
  }

  getProductosPorCategoria(categoriaSlug: string): Observable<Product[]> {
    return this.http
      .get<{ products: Product[] }>(`${this.productosPorCategoriaUrl}/${categoriaSlug}`)
      .pipe(map(res => res.products));
  }
}

