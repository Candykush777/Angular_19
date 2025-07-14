import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConexionService {

  private uRl="https://stephen-king-api.onrender.com/api/books"

  constructor(private http:HttpClient) { }

getAllBooks():Observable<any>{

  return this.http.get(this.uRl)
}


}
