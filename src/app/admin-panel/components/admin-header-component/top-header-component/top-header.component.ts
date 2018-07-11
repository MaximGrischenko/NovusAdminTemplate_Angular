import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'top-header-component',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']

})

export class TopHeaderComponent {
  showMenu: boolean = false;

  constructor(private router: Router) { }

  Toggle() {
    this.showMenu = !this.showMenu;
  }

  Close() {
    this.router.navigate(['']);
  }
}
