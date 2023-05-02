import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Router} from '@angular/router';

import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor 
{
    constructor(private router: Router, private authService: AuthService) { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        let token = this.authService.token;
        
        if (token != null) 
        {
            req = req.clone({
                headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) 
            })
            
        }
        
        return next.handle(req).pipe(
            tap({
                    next: (event: HttpEvent<any>) => this.handleResponse(req,event),
                    error: (error) => this.handleError(req, error)
            })
        );
    }
    handleError(req: HttpRequest<any>, error: any) 
    {
        if (error instanceof HttpErrorResponse && error.status === 401) 
        { 
            this.authService.logOut();
            this.router.navigate(['/login']); 
        }
    }
    handleResponse(req: HttpRequest<any>, event: any) 
    { if (event instanceof HttpResponse) {} }

}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];