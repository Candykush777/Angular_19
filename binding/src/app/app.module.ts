import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { SelectorComponent } from './components/selector/selector.component';
import { MostrarOcultarComponent } from './components/mostrar-ocultar/mostrar-ocultar.component';
import { ValidadionEdadComponent } from './components/validadion-edad/validadion-edad.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CheckboxComponent,
    SelectorComponent,
    MostrarOcultarComponent,
    ValidadionEdadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
