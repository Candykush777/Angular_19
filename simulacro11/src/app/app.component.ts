import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Categorie, Product } from './models/products.model';
import { ApiConexionService } from './services/api-conexion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simulacro11';

  seleccionCategory= ""
  listaProducts?:any[];
   categoriesList: Categorie[] = [];

  constructor(private conexion:ApiConexionService){ }


    ngOnInit() {
    this.conexion.getCategoriesList()
      .subscribe(list => this.categoriesList = list);
  }


    getCategories() {
    this.conexion
      .getAllProducts(this.seleccionCategory)
      .subscribe((res) => (this.listaProducts = res.products));
  }
}
