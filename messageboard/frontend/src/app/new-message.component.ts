import { Component, Output, EventEmitter } from '@angular/core';
import { WebService } from './web.service'

@Component({
    selector:'new-message',
    template:`<div>
    <mat-card class="card">
        <mat-card-content>
            <mat-input-container>
                <input [(ngModel)]="message.owner" matInput placeholder="Name">
            </mat-input-container>
            <mat-input-container>
                <textarea [(ngModel)]="message.text" matInput placeholder="Drop a message"></textarea>
            </mat-input-container>
            <mat-card-actions>
                <button (click)="post()" mat-button color="primary"> Post My Message! </button>
            </mat-card-actions>
        </mat-card-content>
    </mat-card>
    </div>`
})
export class NewMessageComponent {

    @Output() onPosted = new EventEmitter();

    constructor(private webService: WebService){}

    message = {
        owner : "",
        text : "" 
    }
    
    post() {
        this.webService.postMessage(this.message);
        this.onPosted.emit(this.message);
    }

}