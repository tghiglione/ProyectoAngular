import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlumnosComponent } from './dashboard/pages/alumnos/alumnos.component';
import { CursosComponent } from './dashboard/pages/cursos/cursos.component';

const routes: Routes= [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {
        path: 'alumnos',
        component:AlumnosComponent
      },
      {
        path: 'cursos',
        component:CursosComponent
      }
    ]
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
