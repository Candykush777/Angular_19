import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-nombres',
  standalone: false,
  templateUrl: './lista-nombres.component.html',
  styleUrl: './lista-nombres.component.css',
})
export class ListaNombresComponent {
  nombres: String[] = [
    'Edu',
    'Maria',
    'Pedro',
    'Eustakio',
    'Borja',
    'Adolfo',
    'Patricia',
    'Ginés',
    'Landa',
    'Sisie',
  ];
}
