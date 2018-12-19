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
  user: any;
  message: string;
  data: any;

  constructor(private messageService: MessageService, private backend: BackendService, private session: SessionService) {
    this.backend.getCustomer()
      .then((data) => {
        this.user = data
        console.log(this.user)
      })
      .catch((err) => { console.log(err) })
  }

  newMessage(text: string, user: string): void {
    this.messageService.send({ text: text, user: user });
    this.message = '';
  }

}
