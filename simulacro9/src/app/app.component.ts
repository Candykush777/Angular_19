import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiConexionService } from './services/api-conexion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'simulacro9';

  listaLibros?: any[];


  constructor(private conexion: ApiConexionService) {
    this.conexion.getAllBooks().subscribe((res) => {
      this.listaLibros = res.data;
      console.log(this.listaLibros);
    });
  }
}
