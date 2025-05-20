import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiConexionService {

  private uRl="https://dummyjson.com/products";
  private uRl2="https://api.sampleapis.com/movies/animation";
 

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any>{

    return this.http.get(this.uRl2)


  }


}
