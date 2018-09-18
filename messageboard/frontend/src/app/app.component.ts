import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component'

@Component({
  selector: 'app-root',
  template: `
   <h1> Welcome To {{title}} !</h1>
   
   <messages></messages>

   <new-message (onPosted)="onPosted($event)"><new-message>
  `,
})
export class AppComponent {
  title = 'My Messaging Application';
  @ViewChild(MessagesComponent) messages : MessagesComponent;

  onPosted(message) {
  	this.messages.messages.push(message);
  }
}