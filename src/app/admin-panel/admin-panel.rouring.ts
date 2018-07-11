import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component';
import {DashboardComponent} from './components/dashboard-component/dashboard.component';
import {UIElements} from "./components/uielements-component/uielements-component";
import {FormStuffComponent} from "./components/form-stuff-component/form-stuff-component";

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'ui_elements', component: UIElements },
      { path: 'form_stuff', component: FormStuffComponent}
    ]
  }
];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);
