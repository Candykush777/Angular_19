import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Category } from './models/category.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiConexionService } from './services/api-conexion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simulacro12';

   listaProducts?: any[]=[];
   seleccionCategory: string = '';

  constructor(private conexion:ApiConexionService){}


 getCategories(){
    if (this.seleccionCategory) {
      this.conexion.getallCategory(this.seleccionCategory).subscribe((res) => {
        this.listaProducts = res.products;
      });
    }
  }

  
}
