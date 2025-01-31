import { Component } from '@angular/core';
/* import { RouterOutlet } from '@angular/router'; */
/* import { HeroItemComponent } from "./components/hero-item/hero-item.component"; */
import { HeroListComponent } from "./components/hero-list/hero-list.component";

@Component({
  selector: 'app-root',
  imports: [/* RouterOutlet, */ /* HeroItemComponent, */ HeroListComponent], /* vamos cambiando segun
   el componente que vamos a usar, los dejo para ver por donde voy pasando */
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-rw';
}
