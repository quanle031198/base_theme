import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthUtils } from 'app/core/auth/auth.utils';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    /**
     * Constructor
     */
    constructor(private _authService: AuthService, private _router: Router, private matSnackBar: MatSnackBar)
    {
    }

    /**
     * Intercept
     *
     * @param req
     * @param next
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        // Clone the request object
        let newReq = req.clone();

        // Request
        //
        // If the access token didn't expire, add the Authorization header.
        // We won't add the Authorization header if the access token expired.
        // This will force the server to return a "401 Unauthorized" response
        // for the protected API routes which our response interceptor will
        // catch and delete the access token from the local storage while logging
        // the user out from the app.
        // if ( this._authService.accessToken && !AuthUtils.isTokenExpired(this._authService.accessToken) )
        if ( this._authService.accessToken)
        {
            newReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this._authService.accessToken)
            });
        }

        // Response
        return next.handle(newReq).pipe(
            catchError((error) => {

                // Catch "401 Unauthorized" responses
                if ( error instanceof HttpErrorResponse && (error.status === 401 || (error.url.includes('/account') && error.status === 500 )))
                {
                    // Sign out
                    this._authService.signOut();

                    // Reload the app
                    // location.reload();
                }
                if ( error instanceof HttpErrorResponse && error.status === 403 && error.url.includes('/account'))
                {
                   this._router.navigateByUrl('unlock-session')
                }

                if (error instanceof HttpErrorResponse && error.status === 400 || error.status === 405 || error.status === 500) {
                    this.matSnackBar.open(error?.error?.message || 'Có lỗi xảy ra', null, {
                        panelClass: 'bg-red-500'
                    });
                }

                return throwError(error);
            })
        );
    }
}
