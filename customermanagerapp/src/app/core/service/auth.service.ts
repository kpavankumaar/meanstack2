import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService{
    authUrl = '/api/auth';
    isAuthenticated = false;
    redirectUrl: string;
    constructor(private http: HttpClient){
    }
    login(userLogin): Observable<boolean>{
        return this.http.post<boolean>(this.authUrl + '/login', userLogin)
            .pipe(
                map(loggedIn => {
                    this.isAuthenticated = loggedIn;
                    return loggedIn;
                })
            );
    }
    logout(): Observable<boolean>{
        return this.http.post<boolean>(this.authUrl + '/logout', null)
        .pipe(
            map(loggedOut => {
                this.isAuthenticated = !loggedOut;
                return loggedOut;
            })
        );
    }
}
