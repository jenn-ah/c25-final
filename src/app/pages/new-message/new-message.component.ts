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
  vendor: {
    first_name: string,
    last_name: string,
  } = {
      first_name: '',
      last_name: ''
    };
  customer: {
    first_name: string,
    last_name: string,
  } = {
      first_name: '',
      last_name: ''
    };

  message: string;

  constructor(private messageService: MessageService, private backend: BackendService, private session: SessionService) {
    this.customer = this.session.getCustomer()
    this.vendor = this.session.getVendor()
  }

  newMessage(text: string, user: string): void {
    this.messageService.send({ text: text, user: this.customer });
    this.message = '';
  }

  newMessageVendor(text: string, user: string): void {
    this.messageService.send({ text: text, user: this.vendor });
    this.message = '';
  }


  isLoggedIn() {
    return this.session.getIsLoggedIn();
  }

  isVendorLoggedIn() {
    return this.session.getIsVendorLoggedIn();
  }


}
