import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../providers/auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { inject } from '@angular/core';
import { IsLoggedInService } from '../providers/is-logged-in.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, statee: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean |
UrlTree> | boolean | UrlTree => {

  const router = inject(Router);
  const isLoggedIn = inject(IsLoggedInService);

  if(localStorage.getItem("TOKEN")){
    isLoggedIn.publier(true);
    return true;
  }
  else {
    isLoggedIn.publier(false);
    router.navigateByUrl("/login");
    return false;
  }
};
