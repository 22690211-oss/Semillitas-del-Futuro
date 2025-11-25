import { Routes } from '@angular/router';
import { AdminHome } from './features/admin/pages/admin-home/admin-home';
import { Alumno } from './features/alumnos/pages/alumno/alumno';
import { Login } from './features/auth/pages/login/login';
import { Bienvenida } from './pages/bienvenida/bienvenida';
import { AvanceAgua } from './pages/docente/avance_agua/avance_agua';
import { Docente } from './pages/docente/docente';
import { DocenteHome } from './features/docente/pages/docente-home/docente-home';

export const routes: Routes = [{
    path : "",
    component : Bienvenida
  },
  {
    path : "login",
    component : Login
  },
  {
    path : "docente",
    component : DocenteHome
  },
  {
    path : "admin",
    component : AdminHome
  },
  {
    path : "alumno",
    component : Alumno
  }
  ,{path : "agua",component: AvanceAgua}
]