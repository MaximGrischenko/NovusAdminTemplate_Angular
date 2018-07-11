import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
  selector: 'admin-panel-component',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']

})

export class AdminPanelComponent implements OnInit{

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['admin-panel/dashboard']);
  }
}