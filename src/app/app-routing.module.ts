import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { UserLogComponent } from './user-log/user-log.component';

const routes: Routes= [
  {
    path: 'auth',
    component:UserLogComponent,
    loadChildren:()=>import('./user-log/user-log.module').then(m=>m.UserLogModule)
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
