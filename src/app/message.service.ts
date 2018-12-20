import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs'
import { PusherService } from './pusher.service';

export interface Message {
  text: string;
  user: string;
}

@Injectable()
export class MessageService {
  messagesStream = new ReplaySubject<Message>(20);

  constructor(
    private pusherService: PusherService
  ) {
    this.initialize();
  }

  initialize() {
    this.pusherService.messagesChannel.bind('client-new-message', (message) => {
      this.emitNewMessage(message);
    });
  }

  send(message: Message) {
    this.pusherService.messagesChannel.trigger('client-new-message', message);
    this.emitNewMessage(message);
  }

  emitNewMessage(message: Message) {
    this.messagesStream.next(message);
  }

}
