import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){
    const isLoggedIn = localStorage.getItem("isLogin") || false;
    if(isLoggedIn == 'true'){
      return true;
    }
    this.router.navigate(['/'])
    return false;
  }
  
}
