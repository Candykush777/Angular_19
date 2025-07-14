import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie, Product } from '../models/products.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConexionService {

  private uRl ="https://dummyjson.com/products";

  constructor(private http:HttpClient) { }


  getAllProducts(seleccionCategory: string):Observable<any>{

    return this.http.get(this.uRl);
  }

  getCategoriesList(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.uRl}/categories`);
  }
}
