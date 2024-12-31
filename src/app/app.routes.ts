import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const APP_ROUTES: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: AppComponent,
  },
  {
    path: 'cursos',
    loadChildren: () => import("./curso/curso.routes").then(r => r.CURSO_ROUTES)
  }
];
