import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiConexionService } from './services/api-conexion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Category } from './models/products.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'simulacro7';

  categories!: Category;
  seleccionCategory: string = '';
  listaProducts?: any[];

  constructor(private conexion: ApiConexionService) {}

    ngOnInit() {
       this.getCategories();
  }
  getCategories() {
    this.conexion.getAllProducts(this.seleccionCategory).subscribe((res) => {
      this.listaProducts = res.products;
      console.log(this.listaProducts);
    });
  }

  /*   getCategories(){
    this.conexion.getAllCategories(this.seleccionCategory).subscribe((res)=>{
      this.listaProducts=res.products;
    })
  } */
}
