import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.loginService.obtenerUsuario().pipe(map((usuarioAuth)=>{
        if(usuarioAuth){
          return this.router.createUrlTree(['dashboard'])
        }else{
          return true
        }
      }))
  }
  constructor(private router: Router, private loginService: LoginService){
  }
  
}
