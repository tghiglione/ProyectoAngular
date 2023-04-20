import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AlumnosModule } from './pages/alumnos/alumnos.module';
import { UserLogModule } from './pages/user-log/user-log.module';
import { CursosModule } from './pages/cursos/cursos.module';
import { AppRoutingModule } from '../app-routing.module';
import { CursosTablaComponent } from './pages/cursos-tabla/cursos-tabla.component';


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
    AlumnosModule,
    UserLogModule,
    CursosModule,
    AppRoutingModule
  ],
  exports: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
