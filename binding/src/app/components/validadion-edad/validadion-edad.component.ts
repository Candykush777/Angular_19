import { Component } from '@angular/core';

@Component({
  selector: 'app-validadion-edad',
  standalone: false,
  templateUrl: './validadion-edad.component.html',
  styleUrl: './validadion-edad.component.css'
})
export class ValidadionEdadComponent {
    edad: number = 0;
    edadValidada: number=0;
    mostrarMensaje: boolean = false;

    mostrar() {
      this.edadValidada = this.edad; 
        this.mostrarMensaje = true;
    }
}
