import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'admin-panel',
    loadChildren: 'app/admin-panel/admin-panel.module#AdminPanelModule'
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
