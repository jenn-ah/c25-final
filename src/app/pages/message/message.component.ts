import { Component, OnInit } from '@angular/core';
import { Message } from '../../message.service';
import { MessageService } from '../../message.service';

@Component({
    selector: 'app-messages',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessagesComponent implements OnInit {
    messages: Array<Message>;

    constructor(
        private messageService: MessageService,
    ) {
        this.messages = [];
    }

    ngOnInit() {
        this.messageService.messagesStream
            .subscribe(this.newMessageEventHandler.bind(this));
    }

    private newMessageEventHandler(event: Message): void {
        this.messages.push(event);
    }
}
