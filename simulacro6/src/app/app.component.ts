import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiConexionService } from './services/api-conexion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'simulacro6';

  listaBooks?: any[];

  constructor(private conexion: ApiConexionService) {
    this.conexion.getAllBooks().subscribe((res) => {
      this.listaBooks = res.data;
      console.log(this.listaBooks);
    });
  }
}
