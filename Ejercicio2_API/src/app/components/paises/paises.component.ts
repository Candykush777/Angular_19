import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiConexionService } from '../../services/api-conexion.service';

@Component({
  selector: 'app-paises',
  imports: [CommonModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  
  listaPaises?: any[];
 

  constructor(private conexion: ApiConexionService) {
    this.conexion.getAllPaises().subscribe((res) => {
      this.listaPaises = res;
      console.log(this.listaPaises);
    });
  }

}
