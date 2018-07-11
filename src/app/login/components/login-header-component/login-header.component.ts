import { Component } from '@angular/core';

@Component ({
  selector: 'login-header-component',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})

export class LoginHeaderComponent {
  showMenu: boolean = false;

  Toggle() {
    this.showMenu = !this.showMenu;
  }
}
