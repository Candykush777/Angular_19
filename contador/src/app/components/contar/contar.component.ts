import { Component } from '@angular/core';

@Component({
  selector: 'app-contar',
  imports: [],
  templateUrl: './contar.component.html',
  styleUrl: './contar.component.css'
})
export class ContarComponent {


  contador:number =0;


  incremento(){

    this.contador += 1 ;
  }

  decremento(){

this.contador -= 1;

  }

  clear(){

    this.contador=0;
  }

}
