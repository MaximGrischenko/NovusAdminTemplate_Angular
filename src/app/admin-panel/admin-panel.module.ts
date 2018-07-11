import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { adminRouting } from './admin-panel.rouring';
import { StatisticService } from '../../shared/services/stat.service';
import { MessageService } from '../../shared/services/message.service';

import { AdminPanelComponent } from './admin-panel.component';
import { TopHeaderComponent } from  './components/admin-header-component/top-header-component/top-header.component';
import { BottomHeaderComponent } from  './components/admin-header-component/bottom-header-compnent/bottom-header.component';
import { SidebarComponent } from './components/admin-sidebar-component/admin-sidebar.component';
import { DashboardComponent } from './components/dashboard-component/dashboard.component';
import { DashboardTitleComponent } from './components/dashboard-component/dashboard-title-component/dashboard-title.component';
import { DashboardChartsComponent } from './components/dashboard-component/dashboard-charts-component/dashboard-charts.component';
import { DashboardMessagesComponent } from './components/dashboard-component/dashboard-message-component/dashboard-messages.component';
import { UIElements } from './components/uielements-component/uielements-component';
import { FormStuffComponent } from './components/form-stuff-component/form-stuff-component';


import { BalanceHistogram } from './components/chart-components/balance-histogram';
import { VisitsHistogram } from './components/chart-components/visits-histogram';
import { WebsiteStatisticChart } from './components/chart-components/website-statistic-chart';
import { VisitorsStatisticChart } from './components/chart-components/visitors-statistic-chart';
import { OrdersStatisticChart } from './components/chart-components/orders-statistic-chart';
import { UsersStatisticChart } from './components/chart-components/users-statistic-chart';

@NgModule ({
  declarations: [
    AdminPanelComponent,
    TopHeaderComponent,
    BottomHeaderComponent,
    SidebarComponent,
    DashboardComponent,
    DashboardTitleComponent,
    DashboardChartsComponent,
    DashboardMessagesComponent,
    BalanceHistogram,
    VisitsHistogram,
    WebsiteStatisticChart,
    VisitorsStatisticChart,
    OrdersStatisticChart,
    UsersStatisticChart,

    UIElements,
    FormStuffComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    Ng2GoogleChartsModule,
    adminRouting
  ],
  providers: [StatisticService, MessageService]
})

export class AdminPanelModule { }
