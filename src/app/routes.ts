import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import { SignInComponent } from './user/sign-in/sign-in.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';

import { AuthService } from './services/auth.service';
 
export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },    
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'}
    ,
    {
        path: 'dashboard',
        canActivate: [AuthService],
        component: DashboardComponent
    }
    
];