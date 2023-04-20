import { Component } from '@angular/core';
import { NavLinks } from '../core/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
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
}
