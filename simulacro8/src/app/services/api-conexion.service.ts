import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AvailabilityStatus, Categories } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiConexionService {
  private uRl = 'https://dummyjson.com/products';
  private uRl2 = 'https://dummyjson.com/products/category';

  constructor(private http: HttpClient) {}

  

getAllProducts(category:string):Observable<any>{
  return this.http.get(`${this.uRl2}/${category}`)

  /* return this.http.get(`${this.uRl}/category/${category}`); */

}
  getCategoriesList(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${this.uRl}/categories`);
  }

/*   getAllProducts(): Observable<any> {
    return this.http.get(this.uRl);
  } */
}
