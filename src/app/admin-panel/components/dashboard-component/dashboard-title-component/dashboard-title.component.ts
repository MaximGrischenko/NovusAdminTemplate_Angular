import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dashboard-title-component',
  templateUrl: './dashboard-title.component.html',
  styleUrls: ['./dashboard-title.component.css']

})

export class DashboardTitleComponent implements OnInit {

  tabIndex: number;

  ngOnInit() {
    this.tabIndex = 0;
  }

  Toggle($event) {
    let target = $event.target;
    this.tabIndex = target.getAttribute('data-index');
  }
}
