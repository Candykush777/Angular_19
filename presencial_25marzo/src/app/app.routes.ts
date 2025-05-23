import { Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: 'error',
  },];
