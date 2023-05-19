import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       return this.loginService.verificarToken().pipe(map((autenticado) => {
        if (autenticado) {
          return true; // Si el usuario está autenticado, permitimos el acceso al componente de home
        } else {
          return this.router.createUrlTree(['auth']); // Si el usuario no está autenticado, lo redirigimos al componente de login
          
        }
      }))
    }
  } 



