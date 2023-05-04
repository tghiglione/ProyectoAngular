import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AlumnosModule } from './pages/alumnos/alumnos.module';
import { UserLogModule } from '../user-log/user-log.module';
import { CursosModule } from './pages/cursos/cursos.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './pages/cursos/cursos.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';


const routes: Routes = [
  {
    path:'cursos',
    component:CursosComponent
  },
  {
    path:'alumnos',
    component:AlumnosComponent
  }
]


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    UserLogModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
