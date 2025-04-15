import { Component } from '@angular/core';

@Component({
  selector: 'app-estado-pedido',
  standalone: false,
  templateUrl: './estado-pedido.component.html',
  styleUrl: './estado-pedido.component.css',
})
export class EstadoPedidoComponent {
  estadoPedido = '';

  generarEstado() {
    const posiblesEstados = ['pendiente', 'enviado', 'entregado'];
    const indice = Math.floor(Math.random() * posiblesEstados.length);
    this.estadoPedido = posiblesEstados[indice];
  }
}

