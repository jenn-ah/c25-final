import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../app/pages/landing/landingPage.component';

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
import { CategoryPostPage } from './pages/categoryPostPage/categoryPostPage.component';
import { MessageComponent } from './pages/message/message.component';

const routes: Routes = [
  { path:'', component: LandingPageComponent},
  { path: 'postDetail/:id', component: PostDetailComponent},
  { path:'posts/:id', component: PostsComponent},
  { path:'message', component: MessageComponent},
  { path:'posts', component: PostsComponent},
  { path:'create', component: CreateComponent},
  { path:'profile/:id', component: ProfileComponent},
  { path:'edit', component: EditComponent},
  { path:'vendor/:id/edit', component: EditVendorComponent},
  { path:'customer/profile/:id', component: CustomerProfileComponent},
  { path:'home', component: HomeComponent},
  { path:'register', component: RegisterComponent},
  { path:'jobs', component: JobsComponent },
  { path: 'vendorRegister', component: VendorRegisterComponent},
  { path: 'categoryPostPage/:event', component: CategoryPostPage},
  { path:'error', component: ErrorComponent },
  { path:'**', redirectTo:'', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
