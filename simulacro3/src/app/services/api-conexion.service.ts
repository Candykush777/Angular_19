
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Libro } from '../models/libro.model';



@Injectable({
  providedIn: 'root'
})
export class ApiConexionService {

  private readonly uRl="https://stephen-king-api.onrender.com/api/books";

constructor(private http:HttpClient){}


getLibros():Observable<Libro[]>{

return this.http.get<{data:Libro[]}>(this.uRl).pipe(map(res=>res.data))

}







}
