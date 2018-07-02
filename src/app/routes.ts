import { Routes } from '@angular/router'
import { UserComponent } from './user/user.component';

import { SignInComponent } from './user/sign-in/sign-in.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';


 
export const appRoutes: Routes = [    
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'}
    
    
];