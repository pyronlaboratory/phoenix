import { Component , ViewChild } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component'

@Component({
  selector: 'app-root',
  template: `
   <h1> Welcome To {{title}} !</h1>
   <p> {{intro}}</p>
   <new-message (onPosted)="onPosted($event)"></new-message>
   <messages></messages>   
  `,
})
export class AppComponent {

  title = `Pheonix Messaging Application`;
  intro = `Pheonix is currently under development. Pheonix uses node servers' in-memory space for data persistence and angular material design at front. Join development at github@ronnielivingsince1994`;

  @ViewChild(MessagesComponent) messages : MessagesComponent;

  onPosted(message) {
   this.messages.messages.push(message);
 }
}