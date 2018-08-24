import { Injectable } from '@angular/core';
import { VOTERS } from "../mocks/mock-v";

@Injectable()
export class VoterService {

  getVoters() {
    return new Promise(resolve => resolve(VOTERS));
  }

  constructor() { }
}
