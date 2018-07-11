import {Component, OnInit} from '@angular/core';

import {AdminData} from '../../../../../shared/models/class.admin-data';
import {AuthService} from '../../../../../shared/services/auth.service';
import {StatisticData} from '../../../../../shared/models/class.stat-data';
import {StatisticService} from '../../../../../shared/services/stat.service';

@Component({
  moduleId: module.id,
  selector: 'bottom-header-component',
  templateUrl: './bottom-header.component.html',
  styleUrls: ['./bottom-header.component.css']

})

export class BottomHeaderComponent implements OnInit {
  adminData: AdminData = new AdminData('', '', '', '');
  statisticData: StatisticData = new StatisticData('', 0, 0, 0, 0, 0, '');

  constructor(private authService: AuthService, private statisticService: StatisticService) {
  }

  ngOnInit() {
    this.authService.getAdminData()
      .subscribe(adminData => this.adminData = adminData);

    this.statisticService.getStatisticData()
      .subscribe(statisticData => this.statisticData = statisticData);
  }
}
