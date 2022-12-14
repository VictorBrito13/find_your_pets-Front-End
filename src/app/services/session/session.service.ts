import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private session: boolean

  constructor() {
    this.session = false
  }

  onSession(){
    this.session = localStorage.getItem('token') ? true : false
    return { session: this.session, token: localStorage.getItem('token') }
  }

}
