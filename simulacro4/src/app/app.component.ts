import { Component } from '@angular/core';
import { Libro } from './model/libro-model';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'simulacro4';

  listaLibros?: any[];

  constructor(private servicio: DataService) {
    this.servicio.getAllLibros().subscribe((res) => {
      this.listaLibros = res.data;
      console.log(this.listaLibros);
    });
  }
}
