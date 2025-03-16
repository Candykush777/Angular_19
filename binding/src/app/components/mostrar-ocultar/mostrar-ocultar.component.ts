import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-ocultar',
  standalone: false,
  templateUrl: './mostrar-ocultar.component.html',
  styleUrl: './mostrar-ocultar.component.css'
})
export class MostrarOcultarComponent {


  mostrar=false;

  mostrarMensaje(){


this.mostrar= !this.mostrar;


  }

}
