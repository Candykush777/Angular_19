import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConexionService {

  private uRl='https://dummyjson.com/products/category';


  constructor(private http:HttpClient) { }


getallCategory(category:string):Observable<any>{

  return this.http.get(`${this.uRl}/${category}`)


}


}
