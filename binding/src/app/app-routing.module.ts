import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MostrarOcultarComponent } from './components/mostrar-ocultar/mostrar-ocultar.component';
import { SelectorComponent } from './components/selector/selector.component';
import { ValidadionEdadComponent } from './components/validadion-edad/validadion-edad.component';
import { HomeComponent } from './components/home/home.component';
import { MostrarRolComponent } from './components/mostrar-rol/mostrar-rol.component';
import { EstadoPedidoComponent } from './components/estado-pedido/estado-pedido.component';
import { SeleccionIdiomaComponent } from './components/seleccion-idioma/seleccion-idioma.component';
import { IconoDinamicoComponent } from './components/icono-dinamico/icono-dinamico.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { ListaNombresComponent } from './components/lista-nombres/lista-nombres.component';

const routes: Routes = [
   { path: '', component: HomeComponent }, 
  { path: 'formulario', component: FormularioComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'mostrar-ocultar', component: MostrarOcultarComponent },
  { path: 'selector', component: SelectorComponent },
  { path: 'validacion-edad', component: ValidadionEdadComponent },
  { path: 'mostrar-rol', component: MostrarRolComponent },
  { path: 'estado-pedido', component: EstadoPedidoComponent },
  { path: 'seleccion-idioma', component: SeleccionIdiomaComponent },
  { path: 'icono-dinamico', component: IconoDinamicoComponent },
  { path: 'listado-productos', component: ListadoProductosComponent },
  { path: 'lista-nombres', component: ListaNombresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
