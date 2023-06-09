import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { LogInFormValue, Usuario } from '../models/index';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userLog$= new BehaviorSubject<Usuario>({
    id: 0,
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    token: "",
  });

  constructor(private router: Router, private httpClient: HttpClient) { }

  obtenerUsuario():Observable<Usuario>{
    return this.userLog$.asObservable()
  }

  establecerUserAuth(user:Usuario):void{
    this.userLog$.next(user);
  }

  login(formValue: LogInFormValue):void{
    this.httpClient.get<Usuario[]>('http://localhost:3000/usuarios',{params:{...formValue}}).subscribe({
      next:(usuarios)=>{
        const usuarioAuth=usuarios[0];
        if(usuarioAuth){
          localStorage.setItem('token', usuarioAuth.token);
          this.establecerUserAuth(usuarioAuth);
          this.router.navigate(['dashboard']);
        }else{
          alert('user o password incorrecto')
        }
      }
    })
    
  }
  logout(): void {
    localStorage.removeItem('token');
    this.userLog$.next({
      id: 0,
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      token: "",
    });
    this.router.navigate(['auth']);
  }

  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return this.httpClient.get<Usuario[]>(
      `http://localhost:3000/usuarios?token=${token}`,
      {
        headers: new HttpHeaders({
          'Authorization': token || '',
        }),
      }
    )
      .pipe(
        map((usuarios) => {
          const usuarioAutenticado = usuarios[0];
          if (usuarioAutenticado) {
            localStorage.setItem('token', usuarioAutenticado.token)
            this.userLog$.next(usuarioAutenticado);
          }
          return !!usuarioAutenticado;
        }),
        catchError((err) => {
          alert('Error al verificar el token');
          return throwError(() => err);
        })
      );
  }
}

