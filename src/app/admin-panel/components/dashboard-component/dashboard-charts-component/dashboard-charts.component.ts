import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dashboard-charts-component',
  templateUrl: './dashboard-charts.component.html',
  styleUrls: ['./dashboard-charts.component.css']

})

export class DashboardChartsComponent implements OnInit {

  tabIndex: number;

  ngOnInit() {
    this.tabIndex = 0;
  }

  Toggle($event) {
    let target = $event.target;
    this.tabIndex = target.getAttribute('data-index');
  }
}
