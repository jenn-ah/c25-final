import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../component/header.component';
import { LandingPageComponent } from '../pages/landingPage.component';
import { DashboardComponent } from 'src/component/dashboard/dashboard.component';
import { MessageComponent } from 'src/pages/message/message.component';
import { PostsComponent } from 'src/pages/posts/posts.component';
import { CreateComponent } from 'src/pages/create/create.component';
import { ProfileComponent } from 'src/pages/profile/profile.component';
import { HomeComponent } from 'src/pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    DashboardComponent,
    MessageComponent,
    PostsComponent,
    CreateComponent,
    ProfileComponent,
    HomeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
