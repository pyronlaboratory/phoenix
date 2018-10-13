import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class WebService {
    
	BASE_URL = `http://localhost:9400/api`;
	
	messages = [];

    constructor(private http: Http, private sb : MatSnackBar) {
        this.getMessages(null);
    }


    getMessages(user) {
		user = (user) ? '/' + user : '';
        this.http.get(this.BASE_URL + '/messages' + user).subscribe({ response => {
				this.messages = response.json();
			}, error => {
				this.handleError("Unable to get messages");
			}
	    });
    }
    
    async postMessage(message) {
        try {
            var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messages.push(response.json());
        } catch (error) {
            this.handleError("Unable to post message");
        }

    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 5000 });
    }
}