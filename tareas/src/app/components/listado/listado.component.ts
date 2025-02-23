import { Component } from '@angular/core';
import { Conocimiento } from '../../model/modelos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css',
})
export class ListadoComponent {

  nombre = 'Edu';
  nombreConocimiento = '';
  nivelConocimiento = '';
  conocimiento: Conocimiento[] = [];
  mostrar=false;
  url = 'https://victorroblesweb.es/wp-content/uploads/2017/04/angular4.png';




  guardarElemento() {
    if (
      this.nombreConocimiento.length == 0 &&
      this.nivelConocimiento.length == 0
    ) {
      Swal.fire({
        title: "Error!",
        text: "Faltan datos por rellenar!",
        icon: "warning" // Ícono de peligro
      });
    } else {
      let conocimiento: Conocimiento = {
        nombre: this.nombreConocimiento,
        nivel: this.nivelConocimiento,
      };

      this.conocimiento.push(conocimiento);
      this.vaciarDatos();
    }
  }
  mostrarConocimiento() {

    this.mostrar=!this.mostrar;
    
    }
  vaciarDatos() {
    this.nombreConocimiento = '';
    this.nivelConocimiento = '';
  }
}
