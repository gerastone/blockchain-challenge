import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterGo } from '../store/actions/utility.action';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

    private loading;

    constructor(
        private store?: Store<any>) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('token');
        let tokenType = localStorage.getItem('tokenType');
        let newReq: any;
        let headers = new HttpHeaders({
            "Accept": "*/*",
            // "Accept": "application/json, multipart/form-data",
            "Authorization": (token && tokenType) ? tokenType + " " + token : ''
        })
        newReq = request.clone(
            {
                headers: headers,
            });
        return next.handle(newReq).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    console.log("Interceptor - HttpResponse = " + event.status);
                }
            }, error => {
                if (error instanceof HttpErrorResponse) {
                    console.error("status code:");
                    console.error(error.status);
                    console.error(error.message);
                    if (error.status === 401 || error.status === 403) {
                        localStorage.clear();
                        this.store.dispatch(new RouterGo(
                            {
                                to:
                                    { path: '/login' }
                            }
                        ));
                    }

                }
            })
        )
    }
}