import { Routes } from '@angular/router';
import { DocenteHome } from './pages/docente-home/docente-home';
import { WelcomePage } from './pages/welcome-page/welcome-page';
import { Actividad } from './pages/actividad/actividad';
export const routes: Routes = [
  {
    path : "",
    component : WelcomePage
  },
  {
    path : "home/docente",
    component : DocenteHome
  },
  {
    path : "alumno/actividades",
    component : Actividad
  }
];
