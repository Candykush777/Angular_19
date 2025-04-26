import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { EligeProductoComponent } from './components/elige-producto/elige-producto.component';
import { MisionVisionComponent } from './components/mision-vision/mision-vision.component';
import { FooterComponent } from './components/footer/footer.component';
import { provideHttpClient } from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';

// IMPORTA FormsModule

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaProductosComponent,
    EligeProductoComponent,
    MisionVisionComponent,
    FooterComponent,
    ProductoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule     // <-- aquí
  ],
  providers: [
    provideHttpClient(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

