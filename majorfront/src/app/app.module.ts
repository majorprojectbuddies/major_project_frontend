import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ProfileComponent } from './profile/profile.component';
import { LogincredentialsService } from './logincredentials.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const appRoutes: Routes = [
{ path: 'profile', component: ProfileComponent },
{ path: '', component: LoginComponentComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponentComponent,
    ProfileComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [ LogincredentialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
