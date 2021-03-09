import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { from, Observable } from 'rxjs';
import {Router} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {AuthService} from 'src/app/core/service/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router:Router,private authService:AuthService)
{}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.hasUser().pipe(
      // tap(user=> console.log(user)),//debuggear
      map(user=>{
        if(!user){
          return this.router.parseUrl('/auth/login'); //me redirecciona al home
        }
        return true; //no deja ingresar
      })
    ); //si tiene un usuario me deja entrar a la ruta sino ,no
  }
  
}
