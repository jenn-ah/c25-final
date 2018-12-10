import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../../src/pages/landingPage.component'
import { MessageComponent } from 'src/pages/message/message.component';
import { PostsComponent } from 'src/pages/posts/posts.component';
import { CreateComponent } from 'src/pages/create/create.component';
import { ProfileComponent } from 'src/pages/profile/profile.component';
import { HomeComponent } from 'src/pages/home/home.component';

const routes: Routes = [
  { path:'', component: LandingPageComponent},
  { path:'messages', component: MessageComponent},
  { path:'posts', component: PostsComponent},
  { path:'create', component: CreateComponent},
  { path:'profile', component: ProfileComponent},
  { path:'home', component: HomeComponent},
  { path:'**', redirectTo:'', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
