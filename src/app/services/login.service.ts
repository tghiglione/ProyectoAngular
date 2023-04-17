import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Estudiantes } from '../formulario/formulario.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userLog$= new Subject<Estudiantes>();
  constructor() { }

  obtenerUsuario():Observable<Estudiantes>{
    return this.userLog$.asObservable()
  }

  login(usuario:Estudiantes){
    this.userLog$.next(usuario)
  }
}
