import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Estudiantes, LogInFormValue } from '../models/index';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userLog$= new BehaviorSubject<Estudiantes>({name:"",lastName:"",email:""});

  constructor(private router: Router) { }

  obtenerUsuario():Observable<Estudiantes>{
    return this.userLog$.asObservable()
  }

  login(formValue: Estudiantes):void{
    console.log(formValue)
    const usuario={
      name: formValue.name,
      lastName: formValue.lastName,
      email: formValue.email,
    };
    this.userLog$.next(usuario);
    localStorage.setItem('auth-user', JSON.stringify(usuario));
    this.router.navigate(['dashboard']);
  }
  logout(): void {
    localStorage.removeItem('auth-user');
    this.userLog$.next({name:"",lastName:"",email:""});
    this.router.navigate(['auth']);
  }
}

