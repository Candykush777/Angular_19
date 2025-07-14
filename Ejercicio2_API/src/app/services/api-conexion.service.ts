import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConexionService {

  constructor(private http:HttpClient) { }

  private uRl ="https://restcountries.com/v3.1/all";

  getAllPaises():Observable<any>{

return this.http.get(this.uRl)

  }
}
