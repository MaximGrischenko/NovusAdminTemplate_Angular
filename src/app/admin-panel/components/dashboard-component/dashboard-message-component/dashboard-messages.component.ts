import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../../../../shared/services/message.service";
import {UserMessage} from "../../../../../shared/models/class.user-data";

@Component({
  moduleId: module.id,
  selector: 'dashboard-messages',
  templateUrl: './dashboard-messages.component.html'
})

export class DashboardMessagesComponent implements OnInit{

  constructor(private messageService: MessageService) { }
  userMessages: UserMessage[];

  ngOnInit() {
    this.messageService.getMessages()
      .subscribe(userMessage => console.log(this.userMessages = userMessage));
  }
}
