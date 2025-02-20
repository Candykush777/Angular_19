import { Component } from '@angular/core';
import { Coche } from '../../models/coche';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-coches',
  standalone: false,
  templateUrl: './gestion-coches.component.html',
  styleUrls: ['./gestion-coches.component.css'],
})
export class GestionCochesComponent {
  coches: Coche[] = [];

  nuevoCoche: Coche = new Coche();

  agregarCoche() {
    if (
      this.nuevoCoche.marca.trim() === '' ||
      this.nuevoCoche.modelo.trim() === '' ||
      this.nuevoCoche.cv <= 0 ||
      this.nuevoCoche.cc <= 0 ||
      this.nuevoCoche.tipoMotor.trim() === '' ||
      this.nuevoCoche.matricula.trim() === '' ||
      this.nuevoCoche.precio <= 0 ||
      this.nuevoCoche.imagen.trim() === ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Datos incompletos',
        text: 'Por favor, completa todos los campos del formulario.',
        confirmButtonText: 'Cerrar',
      });
      return; // Detiene la ejecución si hay errores
    }


    console.log('Intentando agregar coche:', this.nuevoCoche);

    this.coches.push({...this.nuevoCoche})

        // Mostrar una alerta de éxito y cerrar automáticamente después de 3 segundos
        Swal.fire({
          icon: 'success',
          title: 'Coche agregado',
          text: 'El coche ha sido agregado correctamente.',
          timer: 3000,
          showConfirmButton: false
        });
         // Reiniciar el formulario
    this.nuevoCoche = new Coche();

    // Mostrar la alerta con el número de coches
    if (this.coches.length > 0) {
      Swal.fire({
        icon: 'info',
        title: `Hay ${this.coches.length} coches en la lista`,
        showConfirmButton: false,
        timer: 2000
      });
    }
  }
}
