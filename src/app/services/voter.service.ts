import { Injectable } from '@angular/core';
import { VOTERS } from "../mocks/mock-v";
import { MessageService } from 'app/services/message.service';

@Injectable()
export class VoterService {

  getVoters() {
    return new Promise(resolve => resolve(VOTERS));
  }

  constructor(messageService: MessageService) { }
}
