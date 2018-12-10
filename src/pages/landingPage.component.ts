import { Component, OnInit } from '@angular/core';
import { BackendService } from '../app/services/backend.service';

@Component({
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.scss']
})

export class LandingPageComponent implements OnInit{
 constructor(
   private backend: BackendService,
 ){}
 
 ngOnInit(){};

}