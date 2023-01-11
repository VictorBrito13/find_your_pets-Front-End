import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from 'src/app/services/session/session.service';
import { HttpUsersService } from 'src/app/services/http-users/http-users.service';
import { HttpPetsService } from 'src/app/services/http-pets/http-pets.service';
import { Pet_Response } from 'src/app/interfaces/pets';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css']
})
export class MyPetsComponent implements OnInit {
  private session: boolean
  private token: string
  public url: string
  public url_pets: string
  public my_pets: Pet_Response[]

  constructor(
    private _router: Router,
    private _session: SessionService,
    private _http: HttpUsersService,
    private _http_pets: HttpPetsService
  ) {
    this.session = false
    this.token = ''
    this.url = this._http.get_url_dev()
    this.url_pets = this._http_pets.get_url_dev()
    this.my_pets = []
  }

  ngOnInit(): void {
    const validation_session = this._session.onSession()
    this.session = validation_session.session
    this.token = validation_session.token || 'NO TOKEN'
    this.getMyPets()
  }

  getMyPets(): void {
    this._http.get_my_pets(this.token).subscribe({
      next: res => {
        this.my_pets = res
      },
      error: err => console.error(err)
    })
  }

  deletePet(pet_id:string): void {
    this._http_pets.delete_pet(this.token, pet_id).subscribe({
      next: res => {
        console.log(res);
        this.getMyPets()
      },
      error: err => console.error(err)
    })
  }

  trackPets(index:number, pet:Pet_Response){
    return pet._id
  }

}
