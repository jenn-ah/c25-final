import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../../src/pages/landingPage.component'
import { MessageComponent } from 'src/pages/message/message.component';

const routes: Routes = [
  { path:'', component: LandingPageComponent},
  { path:'messages', component: MessageComponent},
  { path:'**', redirectTo:'', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
