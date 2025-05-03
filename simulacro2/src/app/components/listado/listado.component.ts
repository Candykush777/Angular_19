import { Component } from '@angular/core';
import { Libro } from '../../models/libro.model';
import { ApiConexionService } from '../../services/api-conexion.service';

@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {


libros:Libro[]=[];

constructor(private api:ApiConexionService){};

ngOnInit(){

  this.api.getLibros().subscribe({

    next:(lib)=>{
      this.libros=lib;
      console.log('Libros cargados correctamente',lib)
    }
  })
}

}
