import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ApiConexService {


  private readonly uRL= 'https://dummyjson.com/products';

  constructor(private http:HttpClient) { }


  getProductos(): Observable<Producto[]>{

return this.http

.get<{ products: Producto[] }>(this.uRL)
      .pipe(map(res => res.products));

  }
}
