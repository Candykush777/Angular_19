import { Routes } from '@angular/router';
import { listenerCount } from 'node:stream';
import { ListadoComponent } from './components/listado/listado.component';

export const routes: Routes = [
  { path: 'listado', component: ListadoComponent },
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
];
