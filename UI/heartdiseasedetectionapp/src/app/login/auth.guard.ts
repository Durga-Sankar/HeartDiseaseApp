import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthGuard {
    constructor(
        private router: Router,
        private route:ActivatedRoute
    ) {}
    // this.outputdata=this.route.snapshot.paramMap.get('output')


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // const user = this.accountService.userValue;
        const user = state.url.split('User=')[1]

        console.log(user);
        
        if (user) {
            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}