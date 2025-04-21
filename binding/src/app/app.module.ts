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
import { HomeComponent } from './components/home/home.component';
import { MostrarRolComponent } from './components/mostrar-rol/mostrar-rol.component';
import { EstadoPedidoComponent } from './components/estado-pedido/estado-pedido.component';
import { SeleccionIdiomaComponent } from './components/seleccion-idioma/seleccion-idioma.component';
import { IconoDinamicoComponent } from './components/icono-dinamico/icono-dinamico.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { ListaNombresComponent } from './components/lista-nombres/lista-nombres.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CheckboxComponent,
    SelectorComponent,
    MostrarOcultarComponent,
    ValidadionEdadComponent,
    HomeComponent,
    MostrarRolComponent,
    EstadoPedidoComponent,
    SeleccionIdiomaComponent,
    IconoDinamicoComponent,
    ListadoProductosComponent,
    ListaNombresComponent,
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
