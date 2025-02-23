import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http'; // ✅ Reemplazo de HttpClientModule
import { CommonModule } from '@angular/common'; // ✅ Importación de CommonModule

import { AppComponent } from './app.component';
import { AgendaComponent } from './components/agenda/agenda.component';  /// ✅ Importación correcta

@NgModule({
  declarations: [
    AppComponent, // ✅ Se mantiene aquí porque NO es standalone
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,  // ✅ Importa CommonModule para que *ngFor funcione
    
  ],
  providers: [
    provideHttpClient() // ✅ Manejo correcto de HTTP
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



