import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoComponent } from "./components/listado/listado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simulacro';
}
