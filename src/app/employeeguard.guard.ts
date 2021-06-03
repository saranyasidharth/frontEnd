import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { AuthServices } from './Services/Employee/auth/auth.service';
import { AuthServices} from './Services/Employee/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeguardGuard implements CanActivate {
  
  constructor(private  _authService : AuthServices,
    private _router : Router){}

    canActivate():boolean{
      if(this._authService.loggedIn()){
        return true;
      } else {
        this._router.navigate(['/login']);
        return false;
    }
}
  
}
