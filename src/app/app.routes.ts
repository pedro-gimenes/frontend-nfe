import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Layout } from './shared/layout/layout';

import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {

    path: '',

    component: Layout,

    canActivate: [authGuard],

    children: [

      {
        path: 'dashboard',
        component: Dashboard
      },

      {
        path: 'emissao',
        loadComponent: () =>
          import('./pages/emissao/emissao')
          .then(m => m.Emissao)
      },

      {
        path: 'consulta',
        loadComponent: () =>
          import('./pages/consulta/consulta')
          .then(m => m.Consulta)
      },

      {
        path: 'cancelamento',
        loadComponent: () =>
          import('./pages/cancelamento/cancelamento')
          .then(m => m.Cancelamento)
      },

      {
        path: 'devolucao',
        loadComponent: () =>
          import('./pages/devolucao/devolucao')
          .then(m => m.Devolucao)
      },

      {
        path: 'empresa',
        loadComponent: () =>
          import('./pages/empresa/empresa')
          .then(m => m.Empresa)
      },

      {
        path: 'imposto',
        loadComponent: () =>
          import('./pages/imposto/imposto')
          .then(m => m.Imposto)
      },

      {
        path: 'relatorio',
        loadComponent: () =>
          import('./pages/relatorio/relatorio')
          .then(m => m.Relatorio)
      },

      // abre dashboard automaticamente
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }

    ]

  },

  {
    path: '**',
    redirectTo: 'login'
  }

];
