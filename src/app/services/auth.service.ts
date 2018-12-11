import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private backend: BackendService,
    private session: SessionService,
  ) { }

  register(data) {
    console.log('succesful')
    return this.backend.register(data)
    //should look more like a login.
  }


}