import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { ListadoComponent } from './components/listado/listado.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path:"",redirectTo: 'asignaturas', pathMatch:"full"},
  { path: 'asignaturas', component: AsignaturasComponent },
  { path: 'tecnologias', component: TecnologiasComponent },
  { path: 'listado', component: ListadoComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
