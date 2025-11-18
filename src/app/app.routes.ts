import { Routes } from '@angular/router';
import { AdminHome } from './features/admin/pages/admin-home/admin-home';
import { Login } from './features/auth/pages/login/login';
import { Bienvenida } from './pages/bienvenida/bienvenida';
import { Docente } from './pages/docente/docente';

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
    component : Docente
  },
  {
    path : "admin",
    component : AdminHome
  }
]