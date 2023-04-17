import { Injectable } from '@angular/core';
import { Observable, Subject, filter, map } from 'rxjs';
import { Estudiantes } from '../formulario/formulario.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userLog$= new Subject<Estudiantes>();
  
  
  constructor() { 
    const filtro=this.userLog$.pipe(
      map(val=>val.name.toUpperCase()))
    filtro.subscribe(val=>alert("Bienvenido "+val))
  }

  obtenerUsuario():Observable<Estudiantes>{
    return this.userLog$.asObservable()
  }

  login(usuario:Estudiantes){
    this.userLog$.next(usuario)
  }
}
