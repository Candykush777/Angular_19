import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl='miPrimerAPP/src/app/components/housing-location/housing-location.component.ts'

  housinglocation :Housinglocation ={
     id: 999,
    name: 'Test Home',
    city: "Test City",
    state: "ST",
    photo: `${this.baseUrl}`,
    availableUnits:99 ,
    wifi: true,
    laundry: false}

}
