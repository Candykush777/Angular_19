import { Component } from '@angular/core';

@Component({
  selector: 'app-selector',
  standalone: false,
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent {
    

    selected: string = '';
    
    mostrarSeleccion(): string {
      switch(this.selected) {
        case '1':
          return 'Has seleccionado la opción One';
        case '2': 
          return 'Has seleccionado la opción Two';
        case '3':
          return 'Has seleccionado la opción Three';
        default:
          return 'Por favor selecciona una opción';
      }
    }



}
