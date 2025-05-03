import { Routes } from '@angular/router';
import { ContarComponent } from './components/contar/contar.component';

export const routes: Routes = [

    {path:'contar',component:ContarComponent},
    {path:'',redirectTo:'/contar',pathMatch:'full'}
];
