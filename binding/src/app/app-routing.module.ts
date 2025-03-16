import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MostrarOcultarComponent } from './components/mostrar-ocultar/mostrar-ocultar.component';
import { SelectorComponent } from './components/selector/selector.component';
import { ValidadionEdadComponent } from './components/validadion-edad/validadion-edad.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'mostrar-ocultar', component: MostrarOcultarComponent },
  { path: 'selector', component: SelectorComponent },
  { path: 'validacion-edad', component: ValidadionEdadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
