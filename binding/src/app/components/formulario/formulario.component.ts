import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {


  nombre: string = '';
  edad: number = 0;

  enviarDatos() {
    console.log(this.nombre, this.edad);
  } 

}
