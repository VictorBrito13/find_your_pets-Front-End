import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User, Log_In_Info, Log_In_Response } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class HttpUsersService {
  private url_dev:string

  constructor(
    private http:HttpClient
  ) {
    this.url_dev = 'http://localhost:31415/api/v1/users'
  }

  new_user(user: Partial<User>): Observable<User>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    const body = JSON.stringify(user)
    return this.http.post<User>(`${this.url_dev}/user`, body, { headers })
  }

  log_in(user: Partial<Log_In_Info>): Observable<Log_In_Response>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    const body = JSON.stringify(user)
    return this.http.post<Log_In_Response>(`${this.url_dev}/account`, body, { headers })
  }
}
