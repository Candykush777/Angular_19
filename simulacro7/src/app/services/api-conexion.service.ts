import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiConexionService {
  private readonly uRl = 'https://dummyjson.com/products';
  /*   private readonly uRl2="https://dummyjson.com/products/category"; */

  constructor(private http: HttpClient) {}

  getAllProducts(category: string): Observable<any> {
    if (!category) {
      return this.http.get(`${this.uRl}`);
    } else {
      return this.http.get(`${this.uRl}/category/${category}`);
    }
  }
  /* 
  getAllCategories(category:string):Observable<any>{

return this.http.get(`${this.uRl2}/${category}`)


  } */
}
