import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Pet_Response } from 'src/app/interfaces/pets'

@Injectable({
  providedIn: 'root'
})
export class HttpPetsService {
  private url_dev: string

  constructor(
    private http: HttpClient
  ) {
    this.url_dev = 'http://localhost:31415/api/v1/pets'
  }

  get_url_dev(): string {
    return this.url_dev
  }

  new_pet(pet:Partial<Pet_Response>, token:string):Observable<Pet_Response> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('authentication', token)
    const body = JSON.stringify(pet)
    return this.http.post<Pet_Response>(`${this.url_dev}/pet`, body, { headers })
  }

  get_pets(token: string):Observable<Pet_Response[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('authentication', token)
    return this.http.get<Pet_Response[]>(`${this.url_dev}`, { headers })
  }

  get_pet(token: string, pet_id: string):Observable<Pet_Response> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('authentication', token)
    return this.http.get<Pet_Response>(`${this.url_dev}/pet/${pet_id}`, { headers })
  }
}
