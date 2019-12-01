import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('userRole') != null && localStorage.getItem('userRole').toUpperCase() == 'ADMIN') {
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
        return false;
    }

    canShow(roles: string) {
        const rolesArray = roles.toString().split(':');
        let response = false;
        rolesArray.forEach(rol => {
            if (
                localStorage.getItem('userRole') != null &&
                localStorage.getItem('userRole').toUpperCase() == rol.toUpperCase()
            ) {
                response = true;
            }
        });
        return response;
    }
}
