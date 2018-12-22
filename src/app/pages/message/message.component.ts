import { Component, OnInit } from '@angular/core';
import { Message } from '../../message.service';
import { MessageService } from '../../message.service';
import { SessionService } from 'src/app/services/session.service';


@Component({
    selector: 'app-messages',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
    messages: Array<Message> = [];

    constructor(
        private messageService: MessageService,
        private session: SessionService
    ) {
        this.messages = [];
    }

    ngOnInit() {
        this.messageService.messagesStream
            .subscribe(this.newMessageEventHandler.bind(this))
    }

    private newMessageEventHandler(event: Message): void {
        this.messages.push(event);
    }

    isLoggedIn() {
        return this.session.getIsLoggedIn();
    }

    isVendorLoggedIn() {
        return this.session.getIsVendorLoggedIn();
    }

}
