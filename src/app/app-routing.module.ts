import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../app/pages/landing/landingPage.component'
import { MessageComponent } from '../app/pages/message/message.component';
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


const routes: Routes = [
  { path:'', component: LandingPageComponent},
  { path:'messages', component: MessageComponent},
  { path:'posts', component: PostsComponent},
  { path:'create', component: CreateComponent},
  { path:'profile', component: ProfileComponent},
  { path:'edit', component: EditComponent},
  { path:'edit/vendor', component: EditVendorComponent},
  { path:'customer/profile', component: CustomerProfileComponent},
  { path:'home', component: HomeComponent},
  { path:'register', component: RegisterComponent},
  { path:'jobs', component: JobsComponent },
  { path: 'vendorRegister', component: VendorRegisterComponent},
  { path:'error', component: ErrorComponent },
  { path:'**', redirectTo:'', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
