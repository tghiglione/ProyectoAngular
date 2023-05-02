import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserLogComponent } from './user-log/user-log.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes= [
  {
    path: 'auth',
    component: UserLogComponent,
    /* canActivate: [LoginGuard], */
    loadChildren:()=>import('./user-log/user-log.module').then(m=>m.UserLogModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    /* canActivate: [AuthGuard], */
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'**',
    redirectTo: 'auth'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
