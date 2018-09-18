import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

//Angular Material Library
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

//Application Component Library
import { MessagesComponent } from './messages.component';
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';


@NgModule({
  declarations: [
    AppComponent,MessagesComponent,NewMessageComponent
  ],
  imports: [
        HttpModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSnackBarModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        BrowserModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
