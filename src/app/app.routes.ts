import { Routes } from '@angular/router';
import { Actividad } from './pages/actividad/actividad';
import { AdminPage } from './pages/admin-page/admin-page';
import { WelcomePage } from './pages/welcome-page/welcome-page';
export const routes: Routes = [
  {
    path: '',
    component: WelcomePage,
  },
  {
    path: 'alumno/actividades',
    component: Actividad,
  },

  { path: 'admin/home', component: AdminPage },
];
