import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../providers/auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, statee: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean |
UrlTree> | boolean | UrlTree => {

  const router = inject(Router);

  if(localStorage.getItem("TOKEN")){
    return true;
  }
  else {
    router.navigateByUrl("/login");
    return false;
  }
};
