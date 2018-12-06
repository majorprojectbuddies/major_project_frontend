import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
{ path: 'profile/:loginid', component: ProfileComponent },
{ path: '', component: LoginComponentComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
