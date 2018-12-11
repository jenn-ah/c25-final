import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/component/header/header.component';
import { LandingPageComponent } from '../app/pages/landing/landingPage.component';
import { DashboardComponent } from '../app/component/dashboard/dashboard.component';
import { MessageComponent } from '../app/pages/message/message.component';
import { PostsComponent } from '../app/pages/posts/posts.component';
import { CreateComponent } from '../app/pages/create/create.component';
import { ProfileComponent } from '../app/pages/profile/profile.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';


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
    HomeComponent,
    RegisterComponent
  
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
