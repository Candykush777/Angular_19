import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiConexionService } from './services/api-conexion.service';
import { PaisesComponent } from "./components/paises/paises.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, PaisesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Ejercicio2_API';

}
