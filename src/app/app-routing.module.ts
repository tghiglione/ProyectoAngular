import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserLogComponent } from './user-log/user-log.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes= [
  {
    path: 'auth',
    component: UserLogComponent,
    canActivate: [AuthGuard],
    loadChildren:()=>import('./user-log/user-log.module').then(m=>m.UserLogModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'**',
    redirectTo: 'dashboard'
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
