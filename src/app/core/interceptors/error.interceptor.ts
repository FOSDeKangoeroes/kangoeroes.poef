import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private matSnackbar: MatSnackBar) {}
  intercept(
    req: import('@angular/common/http').HttpRequest<any>,
    next: import('@angular/common/http').HttpHandler
  ): import('rxjs').Observable<import('@angular/common/http').HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status !== 401) {

          let errorMessage = error.error;

          if (error.error.DetailedMessage) {
            errorMessage = error.error.DetailedMessage;
          }

          console.log(errorMessage);

          this.matSnackbar.open(errorMessage);
        }
        return throwError(error);
      })
    );
  }
}
