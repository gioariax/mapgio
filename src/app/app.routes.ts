import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/overview/overview.component'),
  },
  { path: 'home', loadComponent: () => import('./pages/home/home.component') },
  {
    path: 'overview',
    loadComponent: () => import('./pages/overview/overview.component'),
  },
];
