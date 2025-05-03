import { Component } from '@angular/core';

@Component({
  selector: 'app-contar',
  imports: [],
  templateUrl: './contar.component.html',
  styleUrl: './contar.component.css'
})
export class ContarComponent {

  contador: number = 0;

  incrementar() {
    this.contador += 1;
  }

  decrementar() {
    this.contador -= 1;
  }

  resetear() {
    this.contador = 0;
  }

}
