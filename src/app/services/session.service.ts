import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService{
  constructor(
    private backend: BackendService,
    private auth: AuthService,
  ){}

  
}