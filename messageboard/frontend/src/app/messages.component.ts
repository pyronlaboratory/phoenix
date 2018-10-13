import { Component } from '@angular/core';
import { MatButtonModule,MatCardModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { WebService } from './web.service'

@Component({
    selector:'messages',
    template: 
    `<div>
        <mat-card class="card">
            <mat-card-header>
                <mat-card-title>{{reference}}</mat-card-title>
            </mat-card-header>
            <mat-card-content> 
                Total Messages On Server :: {{webService.messages.length}} 
            </mat-card-content>
        </mat-card>     
    </div>
    
    <br>
    
    <div *ngFor="let message of webService.messages">
        <mat-card class="card">
            <mat-card-header>
                <mat-card-title> {{message.owner}} </mat-card-title>
            </mat-card-header>
            <mat-card-content> {{message.text}} </mat-card-content>
        </mat-card>
    </div>`
})
export class MessagesComponent{

    reference: string = `Messenger Component`;

    constructor(private webService: WebService, private route: ActivatedRoute){}
	
	ngOnInit(){
        var name = this.route.snapshot.params.name;
        this.webService.getMessages(name);
    }

}