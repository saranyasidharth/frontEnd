import { Injectable} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import { Observable } from 'rxjs';
import { AuthServices } from '../../employee/auth/auth.service';
import { adminBaseURL, StudentBaseURL, employeeBaseURL } from 'src/environments/environment';
import { AdminAuthServiceService } from '../../Admin/auth/admin-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private _authService : AuthServiceService, private _employeeAuth : AuthServices,
              private _adminAuthService : AdminAuthServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /* for all Student services */
    if(req.url.startsWith(StudentBaseURL)){
      let tokenizedReq = req.clone({
        setHeaders:{
          Authorization : `Bearer ${this._authService.getToken()}`
        }
      })
      return next.handle(tokenizedReq);
    }
    
    /* For all employee services */
    if(req.url.startsWith(employeeBaseURL)){
      let tokenizedReq = req.clone({
        setHeaders:{
          Authorization : `Bearer ${this._employeeAuth.getToken()}`
        }
      })
      return next.handle(tokenizedReq);
    }

    if(req.url.startsWith(adminBaseURL)){
      let tokenizedReq = req.clone({
        setHeaders:{
          Authorization : `Bearer ${this._adminAuthService.getToken()}`
        }
      })
      return next.handle(tokenizedReq);
    }


    
    
  }
}
