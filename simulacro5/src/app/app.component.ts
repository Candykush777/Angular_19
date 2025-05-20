import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { ApiConexionService } from './services/api-conexion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'simulacro5';

  listaProductos?: any[];
  listaMovies?:any[];

  constructor(private conexion: ApiConexionService) {
    this.conexion.getAllProducts().subscribe((res) => {
      this.listaMovies = res;
      console.log(this.listaMovies);
    });
  }
}
