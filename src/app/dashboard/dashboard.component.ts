import { Component } from '@angular/core';
import { NavLinks, Usuario } from '../core/models';
import { Observable, Subject, Subscribable } from 'rxjs';
import { LoginService } from '../core/services/login.service';
import { Estudiantes, LogInFormValue } from '../core/models/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  usuario$: Observable<Usuario>
  
  constructor(private loginService: LoginService){
    this.usuario$=this.loginService.obtenerUsuario();
  }

  showFiller = false;

  links: NavLinks[]=[
    {
      path:'dashboard',
      title: 'Home'
    },
    {
      path: 'alumnos',
      title: 'Alumnos'
    },
    {
      path: 'cursos',
      title: 'Cursos'
    }  
  ]
  logOut(): void {
    this.loginService.logout()
  } 
}
