import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './user/shared/user.service';

import { RouterModule } from '@angular/router'
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    SignInComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HomeComponent,
    // UserComponent,
    // SignInComponent,
    // SignUpComponent,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],  

  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
