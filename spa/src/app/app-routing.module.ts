import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EligeProductoComponent } from './components/elige-producto/elige-producto.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { MisionVisionComponent } from './components/mision-vision/mision-vision.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'elige-producto', component: EligeProductoComponent },
  { path: 'lista-productos', component: ListaProductosComponent },
  { path: 'mision-vision', component: MisionVisionComponent },
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
