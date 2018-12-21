import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/component/header/header.component';
import { LandingPageComponent } from '../app/pages/landing/landingPage.component';
import { DashboardComponent } from '../app/component/dashboard/dashboard.component';
import { PostsComponent } from '../app/pages/posts/posts.component';
import { CreateComponent } from '../app/pages/create/create.component';
import { ProfileComponent } from '../app/pages/profile/profile.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { VendorRegisterComponent } from './pages/vendorRegister/vendorRegister.component';
import { ErrorComponent } from './pages/error/error.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { CustomerProfileComponent } from './pages/customerProfile/customerProfile.component';
import { EditComponent } from './pages/edit/edit.component';
import { EditVendorComponent } from './pages/editVendor/editVendor.component';
import { PostDetailComponent } from './pages/postDetail/postDetail.component';
import { MessageService } from './message.service';
import { PusherService } from './pusher.service';
import { MessagesComponent } from './pages/message/message.component';
import { NewMessageComponent } from './pages/new-message/new-message.component';
import { MessagesSelectionComponent } from './pages/messageSelection/messageSelection.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    DashboardComponent,
    MessagesComponent,
    PostsComponent,
    CreateComponent,
    ProfileComponent,
    HomeComponent,
    RegisterComponent,
    VendorRegisterComponent,
    ErrorComponent,
    JobsComponent,
    CustomerProfileComponent,
    EditComponent,
    EditVendorComponent,
    PostDetailComponent,
    NewMessageComponent,
    MessagesSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PusherService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
