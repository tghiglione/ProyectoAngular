import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Estudiantes } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class AlumnosServiceService {

  private estudiantes$= new BehaviorSubject<Estudiantes[]>([
    {
      name: "Juan",
      lastName: "Perez",
      email: "juanPerez@gmail.com"
    }
  ]);

  constructor() { }

  obtenerAlumnos():Observable<Estudiantes[]>{
    return this.estudiantes$.asObservable()
  }

}
