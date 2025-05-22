import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiConexionService } from './services/api-conexion.service';
import { CommonModule } from '@angular/common';
import { AvailabilityStatus, Categories, Category } from './models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'simulacro8';

  seleccionCategory: string = '';
  categories!: Category;
  listaProducts?: any[];
 categoriesList: Categories[] = [];

  constructor(private conexion: ApiConexionService) {}

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
/* 
       this.conexion.getAllProducts().subscribe((res)=>{

    this.listaProducts=res.products;
    console.log(this.listaProducts);
    
  })  */
