import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { ListadoComponent } from './components/listado/listado.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path:"",redirectTo: 'asignaturas', pathMatch:"full"},
  { path: 'asignaturas/5', component: AsignaturasComponent },
  { path: 'tecnologias', component: TecnologiasComponent, children: [
    {path: 'angular', component: AsignaturasComponent},
    {path: 'react', component: ListadoComponent},
    
  ] },
  { path: 'listado/:id', component: ListadoComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
