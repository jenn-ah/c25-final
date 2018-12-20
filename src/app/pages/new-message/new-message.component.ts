import { Component } from '@angular/core';
import { MessageService } from '../../message.service';
import { BackendService } from 'src/app/services/backend.service';
import { SessionService } from 'src/app/services/session.service';


@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent {
  user: {
    username: string;
  } = {
      username: "annieL",
    };
// user: any;

  customer: any;
  message: string;
  data: any;

  constructor(private messageService: MessageService, private backend: BackendService, private session: SessionService) {
    this.backend.getCustomer()
      .then((data) => {
        this.customer = data
      })
      .catch((err) => { console.log(err) })
  }

  newMessage(text: string, user: string): void {
    this.messageService.send({ text: text, user: this.customer });
    this.message = '';
  }

  newMessageVendor(text: string, user: string): void {
    this.messageService.send({ text: text, user: this.user });
    this.message = '';
  }


  isLoggedIn() {
    return this.session.getIsLoggedIn();
  }

  isVendorLoggedIn() {
    return this.session.getIsVendorLoggedIn();
  }


}
